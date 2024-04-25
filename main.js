const API_URL = "https://6628ba6e54afcabd0736b798.mockapi.io/Products/Product";

let wishlistProducts = [];

async function getProducts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const products = await response.json();

    for (let prod of products) {
      let card = document.createElement("div");

      card.innerHTML = `

                             <img src="${prod.ImgURL}" alt="product_image">

                            <p>${prod.Name}</p>

                            <p>${prod.Price} $</p>

                            <button onClick="addToWishlist(this,${prod.id})"> Add to Wishlist</button>

                            `;

      document.querySelector(".container").appendChild(card);
    }
  } catch (error) {
    console.log(error);
  }
}

getProducts();

class Products {
  constructor(ImgURL, Name, Price) {
    this.ImgURL = ImgURL;

    this.Name = Name;

    this.Price = Price;
  }
}

let wishQ = document.querySelector("#items");

function addToWishlist(element, productId) {
  let wishlistItem = new Products(
    element.parentElement.children[0].src,
    element.parentElement.children[1].innerText,
    element.parentElement.children[2].innerText
  );

  wishlistProducts.push(wishlistItem);

  saveWishlist(wishlistProducts);

  let strWishlist = JSON.stringify(wishlistProducts);

  localStorage.setItem("wishlist", strWishlist);

  wishQ.innerHTML = JSON.parse(localStorage.getItem("wishlist")).length;
}

function saveWishlist(data) {
  fetch("https://6628ba6e54afcabd0736b798.mockapi.io/Products/wishlist", {
    method: "POST",

    headers: {
      "Content-type": "application/json;",
    },

    body: data,
  });
}

wishQ.innerHTML = JSON.parse(localStorage.getItem("wishlist")).length;
