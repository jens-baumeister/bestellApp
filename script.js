function init() {
    renderMainDishes();
}

function renderMainDishes() {
    let mainDishesRef = document.getElementById('maindishes');
    mainDishesRef.innerHTML = '';
    for (let i = 0; i < mainDishes.length; i++) {
        mainDishesRef.innerHTML += getMainDishes(i);
    }
}