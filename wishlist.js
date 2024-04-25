let wishProducts = JSON.parse(localStorage.getItem("wishlist"));

let wishQW = document.querySelector("#items");

if (wishProducts.length > 0) {
  wishQW.innerHTML = JSON.parse(localStorage.getItem("wishlist")).length;
}

document.readyState;

for (let prod of wishProducts) {
  let card = document.createElement("div");

  card.innerHTML = `

                     <img src="${prod.ImgURL}" alt="product_image">

                    <p>${prod.Name}</p>

                    <p>${prod.Price} $</p>

                    <button onClick="deleteFromWishlist(this)" >Delete</button>

                    `;

  document.querySelector(".cardContainer").appendChild(card);
}

function deleteFromWishlist(btn) {
  btn.parentElement.style.display = "none";
}
