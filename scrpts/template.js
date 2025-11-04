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

function getDrinks(i) {
    return `
        <div class="dish">
            <h3>${drinks[i].name}</h3><br>
            <p>${drinks[i].description}</p><br>
            <div class="price">
            <br><h3>€${drinks[i].price.toFixed(2)}</h3>
            </div>
        </div>
        `;
}

function getDesserts(i) {
    return `
        <div class="dish">
            <h3>${desserts[i].name}</h3><br>
            <p>${desserts[i].description}</p><br>
            <div class="price">
            <br><h3>€${desserts[i].price.toFixed(2)}</h3>
            </div>
        </div>
        `;
}