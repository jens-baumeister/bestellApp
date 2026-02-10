let cart = [];

function init() {
  renderMainDishes();
  renderDrinks();
  renderDesserts();
  renderCart();
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
  renderCart();
}

function removeFromCart(i) {
  cart.splice(i, 1);
  renderCart();
}

function picePlusOne(i) {
  cart[i].quantity += 1;
  renderCart();
}

function piceMinusOne(i) {
  if (cart[i].quantity > 1) {
    cart[i].quantity -= 1;
  } else {
    removeFromCart(i);
  }
  renderCart();
}

function renderTotalPrice() {
  if (cart.length === 0) {
    let totalPriceRef = document.getElementById("totalprice");
    totalPriceRef.innerHTML = "";
    return;
  }
  let totalPriceRef = document.getElementById("totalprice");
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }

  let deliveryCost = getDeliveryCost();
  totalPriceRef.innerHTML = getTotalPrice(total, deliveryCost);
}

function getDeliveryCost() {
  let selfCollectButton = document.getElementById("selfcollect");
  return selfCollectButton.checked ? 0 : 5;
}

function checkout() {
  cart = [];
  renderCart();
  alert("Vielen Dank für Ihre Bestellung!");
}