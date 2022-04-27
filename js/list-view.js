window.addEventListener("DOMContentLoaded", init);

function init(event) {
  getData();
}

async function getData() {
  let result = await fetch(
    "https://technancy.dk/SilfenWebsitewp/wp-json/wp/v2/silfen?_embed"
  );
  showItems(await result.json());
}

function showItems(bags) {
  console.log(bags._embedded);
  const template = document.querySelector("#shop-template").content;
  bags.forEach((item) => {
    const templateClone = template.cloneNode(true);
    //change Content
    templateClone.querySelector("img").src =
      item._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.medium.source_url;
    templateClone.querySelector("h4").textContent = item.title.rendered;
    templateClone.querySelector("h5").textContent = `DKK ${item.price}`;

    let colours = item._embedded["wp:term"];

    document.querySelector("main .shop-list").appendChild(templateClone);
  });
}
