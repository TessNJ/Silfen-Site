document
  .querySelector(".burgerIcon3")
  .addEventListener("click", toggleMobileMenu);
function toggleMobileMenu() {
  var x = document.querySelector(".burgerIcon3");
  if (x.className === "nav3") {
    x.className += "open";
  } else {
    x.className = "nav3";
  }
}
