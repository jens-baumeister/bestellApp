let cart = [];
let deliveryCost = getDeliveryCost();

function init() {
  renderCategory("maindishes");
  renderCategory("drinks");
  renderCategory("desserts");
  loadFromLocalStorage();
  loadCheckboxFromLocalStorage();
  renderCart();
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
  const containers = ["cart", "mobile_cart"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  let html = "";
  for (let i = 0; i < cart.length; i++) {
    html += getCartItem(i);
  }

  containers.forEach(container => {
    container.innerHTML = html;
  });

  renderTotalPrice();
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
}

function removeFromCart(i) {
  cart.splice(i, 1);
  saveToLocalStorage();
  renderCart();
}

function picePlusOne(i) {
  cart[i].quantity += 1;
  saveToLocalStorage();
  renderCart();
}

function piceMinusOne(i) {
  if (cart[i].quantity > 1) {
    cart[i].quantity -= 1;
  } else {
    removeFromCart(i);
  }
  saveToLocalStorage();
  renderCart();
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

function getDeliveryCost(changedId = null) {
  const ids = ["selfcollect", "mobile_selfcollect"];
  const boxes = ids.map(id => document.getElementById(id)).filter(Boolean);
  let state = localStorage.getItem("selfcollect") === "true";

  if (changedId) {
    state = document.getElementById(changedId).checked;
    localStorage.setItem("selfcollect", state);
    renderCart();
  }

  boxes.forEach(cb => cb.checked = state);
  return state ? 0 : 5;
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
  renderCart();
  toggleMobileCart();
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
  renderCart();
  closeDialog("emptycart");
}

function toggleMobileCart() {
  document.getElementById("resp_cart").classList.toggle("open");
}
