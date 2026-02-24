function saveToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadFromLocalStorage() {
  let savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

function checkboxToLocalStorage() {
  let selfCollectButton = document.getElementById("selfcollect");
  localStorage.setItem("selfCollect", selfCollectButton.checked);
}

function loadCheckboxFromLocalStorage() {
  let selfCollectValue = localStorage.getItem("selfCollect");
  if (selfCollectValue) {
    document.getElementById("selfcollect").checked =
      selfCollectValue === "true";
  }
}

function resetCheckboxInLocalStorage() {
  localStorage.setItem("selfCollect", false);
  document.getElementById("selfcollect").checked = false;
}
