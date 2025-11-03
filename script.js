function init() {
    renderMainDishes();
}

function renderMainDishes() {
    let mainDishes = document.getElementById('maindishes');
    mainDishes.innerHTML = '';
    for (let i = 0; i < mainDishes.length; i++) {
        let dish = mainDishes[i];
        mainDishes.innerHTML += `
        <div class="dish">
            <h3>${dish.name} - €${dish.price.toFixed(2)}</h3>
            <p>${dish.description}</p>
        </div>
        `;
    }
}