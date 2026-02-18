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
    document.getElementById("selfcollect").checked = selfCollectValue === "true";
  }
}

function resetCheckboxInLocalStorage() {
  localStorage.setItem("selfCollect", false);
  document.getElementById("selfcollect").checked = false;
}

function checkMobileBoxToLocalStorage() {
  let mobileSelfCollectButton = document.getElementById("mobile_selfcollect");
  localStorage.setItem("mobile_selfCollect", mobileSelfCollectButton.checked);
}

function loadMobileCheckboxFromLocalStorage() {
  let mobileSelfCollectValue = localStorage.getItem("mobile_selfCollect");
  if (mobileSelfCollectValue) {
    document.getElementById("mobile_selfcollect").checked = mobileSelfCollectValue === "true";
  }
}

function resetMobileCheckboxInLocalStorage() {
  localStorage.setItem("mobile_selfCollect", false);
  document.getElementById("mobile_selfcollect").checked = false;
}