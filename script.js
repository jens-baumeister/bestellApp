let cart = [];

function init() {
    renderMainDishes();
    renderDrinks();
    renderDesserts();
    renderCart();
}

function renderMainDishes() {
    let mainDishesRef = document.getElementById('maindishes');
    mainDishesRef.innerHTML = '';
    for (let i = 0; i < menu.mainDishes.length; i++) {
        mainDishesRef.innerHTML += getMainDishes(i);
    }
}

function renderDrinks() {
    let drinksRef = document.getElementById('drinks');
    drinksRef.innerHTML = '';
    for (let i = 0; i < menu.drinks.length; i++) {
        drinksRef.innerHTML += getDrinks(i);
    }
}

function renderDesserts() {
    let dessertsRef = document.getElementById('desserts');
    dessertsRef.innerHTML = '';
    for (let i = 0; i < menu.desserts.length; i++) {
        dessertsRef.innerHTML += getDesserts(i);
    }
}

function onlyDishes() {
    document.getElementById('maindishes').innerHTML = '';
    document.getElementById('drinks').innerHTML = '';
    document.getElementById('desserts').innerHTML = '';
    renderMainDishes();
}

function onlyDrinks() {
    document.getElementById('maindishes').innerHTML = '';
    document.getElementById('drinks').innerHTML = '';
    document.getElementById('desserts').innerHTML = '';
    renderDrinks();
}

function onlyDesserts() {
    document.getElementById('maindishes').innerHTML = '';
    document.getElementById('drinks').innerHTML = '';
    document.getElementById('desserts').innerHTML = '';
    renderDesserts();
}

function renderCart() {
    let cartRef = document.getElementById('cart');
    cartRef.innerHTML = '';
    for (let i = 0; i < cart.length; i++) {
        cartRef.innerHTML += getCartItem(i);
    }
}

function moveDish(i, destinationKey) {
    let item = menu[destinationKey].push(item[0], i);
    document.getElementById('maindishes').innerHTML = '';
    document.getElementById('drinks').innerHTML = '';
    document.getElementById('desserts').innerHTML = '';
    renderMainDishes();
    renderDrinks();
    renderDesserts();
}