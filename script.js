let cart = [];

function init() {
  renderCategory("maindishes");
  renderCategory("drinks");
  renderCategory("desserts");
  loadFromLocalStorage();
  loadCheckboxFromLocalStorage();
  loadMobileCheckboxFromLocalStorage();
  renderCart();
  renderMobileCart();
}

function showCategory(category) {
  let categoryMap = {
    maindishes: "maindishes",
    drinks: "drinks",
    desserts: "desserts",
  };
  Object.keys(categoryMap).forEach((id) => {
    document.getElementById(id).innerHTML = "";
  });

  renderCategory(categoryMap[category]);
}

function renderCategory(category) {
  const container = document.getElementById(category);
  container.innerHTML = "";

  menu[category].forEach((item, index) => {
    container.innerHTML += getMenuItemTemplate(item, category, index);
  });
}

function renderCart() {
  let cartRef = document.getElementById("cart");
  cartRef.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    cartRef.innerHTML += getCartItem(i);
  }
  renderTotalPrice();
}

function renderMobileCart() {
  let cartRef = document.getElementById("mobile_cart");
  cartRef.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    cartRef.innerHTML += getCartItem(i);
  }
  renderMobileTotalPrice();
}

function addToCart(i, startKey) {
  if (cart.some((item) => item.name === menu[startKey][i].name)) {
    let index = cart.findIndex((item) => item.name === menu[startKey][i].name);
    picePlusOne(index);
    return;
  }
  let item = menu[startKey][i];
  cart.push({
    name: item.name,
    price: item.price,
    quantity: +1,
  });
  saveToLocalStorage();
  renderCart();
  renderMobileCart();
}

function removeFromCart(i) {
  cart.splice(i, 1);
  saveToLocalStorage();
  renderCart();
  renderMobileCart();
}

function picePlusOne(i) {
  cart[i].quantity += 1;
  saveToLocalStorage();
  renderCart();
  renderMobileCart();
}

function piceMinusOne(i) {
  if (cart[i].quantity > 1) {
    cart[i].quantity -= 1;
  } else {
    removeFromCart(i);
  }
  saveToLocalStorage();
  renderCart();
  renderMobileCart();
}

function renderTotalPrice() {
  let desktopRef = document.getElementById("totalprice");
  let mobileRef = document.getElementById("mobile-totalprice");

  if (cart.length === 0) {
    desktopRef.innerHTML = "";
    mobileRef.innerHTML = "";
    return;
  }

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }

  let deliveryCost = getDeliveryCost();
  let totalHTML = getTotalPrice(total, deliveryCost);

  desktopRef.innerHTML = totalHTML;
  mobileRef.innerHTML = totalHTML;
}

function renderMobileTotalPrice() {
  if (cart.length === 0) {
    let mobileTotalPriceRef = document.getElementById("mobile-totalprice");
    mobileTotalPriceRef.innerHTML = "";
    return;
  }
  let mobileTotalPriceRef = document.getElementById("mobile-totalprice");
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }

  let deliveryCost = getMobileDeliveryCost();
  mobileTotalPriceRef.innerHTML = getMobileTotalPrice(total, deliveryCost);
}

function getDeliveryCost() {
  let selfCollectButton = document.getElementById("selfcollect");
  checkboxToLocalStorage();
  return selfCollectButton.checked ? 0 : 5;
}

function getMobileDeliveryCost() {
  let mobileSelfCollectButton = document.getElementById("mobile_selfcollect");
  checkMobileBoxToLocalStorage();
  return mobileSelfCollectButton.checked ? 0 : 5;
}

function openDialog(id) {
  document.getElementById(id).showModal();
}

function closeDialog(id) {
  document.getElementById(id).close();
}

function resetCart() {
  cart = [];
  saveToLocalStorage();
  resetCheckboxInLocalStorage();
  resetMobileCheckboxInLocalStorage();
  renderCart();
  renderMobileCart();
}

function checkout() {
  resetCart();
  openDialog("checkout");
}

function emptyCart() {
  openDialog("emptycart");
}

function clearCart() {
  resetCart();
  closeDialog("emptycart");
}
