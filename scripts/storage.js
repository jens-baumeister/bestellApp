function saveToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadFromLocalStorage() {
  let savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}