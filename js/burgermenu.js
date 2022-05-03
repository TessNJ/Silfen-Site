document
  .querySelector(".burgerIcon3")
  .addEventListener("click", toggleMobileMenu);
function toggleMobileMenu() {
  var x = document.querySelector(".burgerIcon3");
  if (x.style.display === "block") {
    x.style.display += "none";
  } else {
    x.style.display = "block";
  }
}
