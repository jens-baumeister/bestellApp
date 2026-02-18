let cart = [];

function init() {
  renderMainDishes();
  renderDrinks();
  renderDesserts();
  loadFromLocalStorage();
  loadCheckboxFromLocalStorage();
  renderCart();
  renderMobileCart();
}

function renderMainDishes() {
  let mainDishesRef = document.getElementById("maindishes");
  mainDishesRef.innerHTML = "";
  for (let i = 0; i < menu.mainDishes.length; i++) {
    mainDishesRef.innerHTML += getMainDishes(i);
  }
}

function renderDrinks() {
  let drinksRef = document.getElementById("drinks");
  drinksRef.innerHTML = "";
  for (let i = 0; i < menu.drinks.length; i++) {
    drinksRef.innerHTML += getDrinks(i);
  }
}

function renderDesserts() {
  let dessertsRef = document.getElementById("desserts");
  dessertsRef.innerHTML = "";
  for (let i = 0; i < menu.desserts.length; i++) {
    dessertsRef.innerHTML += getDesserts(i);
  }
}

function onlyDishes() {
  document.getElementById("maindishes").innerHTML = "";
  document.getElementById("drinks").innerHTML = "";
  document.getElementById("desserts").innerHTML = "";
  renderMainDishes();
}

function onlyDrinks() {
  document.getElementById("maindishes").innerHTML = "";
  document.getElementById("drinks").innerHTML = "";
  document.getElementById("desserts").innerHTML = "";
  renderDrinks();
}

function onlyDesserts() {
  document.getElementById("maindishes").innerHTML = "";
  document.getElementById("drinks").innerHTML = "";
  document.getElementById("desserts").innerHTML = "";
  renderDesserts();
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
  loadCheckboxFromLocalStorage();
  let selfCollectButton = document.getElementById("mobile_selfcollect");
  checkboxToLocalStorage();
  return selfCollectButton.checked ? 0 : 5;
}

function checkout() {
  cart = [];
  saveToLocalStorage();
  resetCheckboxInLocalStorage();
  renderCart();
  renderMobileCart();
  document.getElementById("checkout").showModal();
}

function closeCheckout() {
  document.getElementById("checkout").close();
}

function emptyCart() {
  document.getElementById("emptycart").showModal();
}

function clearCart() {
  cart = [];
  saveToLocalStorage();
  resetCheckboxInLocalStorage();
  renderCart();
  renderMobileCart();
  document.getElementById("emptycart").close();
}

function closeEmptyCart() {
  document.getElementById("emptycart").close();
}

function mobileCart() {
  document.getElementById("resp_cart").classList.toggle("open");
}
