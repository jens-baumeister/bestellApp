function getMainDishes(i) {
    return `
        <div class="dish">
            <h3>${mainDishes[i].name}</h3><br>
            <p>${mainDishes[i].description}</p><br>
            <div class="price">
            <br><h3>€${mainDishes[i].price.toFixed(2)}</h3>
            </div>
        </div>
        `;
}