// window.addEventListener("DOMContentLoaded", init);

// function init(event) {
//   getData();
// }

// async function getData() {
//   let result = await fetch(
//     "https://technancy.dk/SilfenWebsitewp/wp-json/wp/v2/silfen?_embed"
//   );
//   showItems(await result.json());
// }

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
let url =
  "https://technancy.dk/SilfenWebsitewp/wp-json/wp/v2/silfen/" + 57 + "?_embed";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProduct(data);
  });

function handleProduct(bag) {
  document.querySelector(".product-name").textContent = bag.title.rendered;
  document.querySelector(".product-price").textContent = `DKK ${bag.price},00`;
  document.querySelector(".product-image_small").src =
    bag._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
  document.querySelector(".product-image_small").alt =
    bag._embedded["wp:featuredmedia"][0].alt_text;

  document.querySelector(".product-description").textContent = bag.discription;
  document.querySelector(".materials").textContent = bag.matieral;
  document.querySelector(".dimentions").textContent = bag.dimensions;
  document.querySelector(".product-image_main").src = bag.image2.guid;
  document.querySelector(".product-image_main").alt = bag.image2.post_title;

  document
    .querySelector(".description")
    .addEventListener("click", function (event) {
      console.log(event);
      document
        .querySelector(".description div")
        .classList.toggle("toggle-hidden");
    });
  document
    .querySelector(".delivery")
    .addEventListener("click", function (event) {
      console.log(event);
      document.querySelector(".delivery div").classList.toggle("toggle-hidden");
    });
}
