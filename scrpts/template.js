function getMainDishes(i) {
    return `
        <button onclick="moveDish(${i}, 'cart')" class="dish">
            <div class="dish_header">
                <h3>${menu.mainDishes[i].name}
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FF8001">
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                </svg>

            </div><br>
            <p>${menu.mainDishes[i].description}</p><br>
            <div class="price">
                <br><h3>€${menu.mainDishes[i].price.toFixed(2)}</h3>
            </div>
        </button>
    `;
}

function getDrinks(i) {
    return `
        <button onclick="moveDish(${i}, 'cart')(${i}, '', 'cart')" class="dish">
            <div class="dish_header">
                <h3>${menu.drinks[i].name}
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FF8001">
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                </svg>

            </div><br>
            <p>${menu.drinks[i].description}</p><br>
            <div class="price">
                <br><h3>€${menu.drinks[i].price.toFixed(2)}</h3>
            </div>
        </button>
    `;
}

function getDesserts(i) {
    return `
        <button onclick="moveDish(${i}, 'cart')" class="dish">
            <div class="dish_header">
                <h3>${menu.desserts[i].name}
                </h3>
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FF8001">
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                </svg>

            </div><br>
                <p>${menu.desserts[i].description}</p><br>
            <div class="price">
            <br><h3>€${menu.desserts[i].price.toFixed(2)}</h3>
            </div>
        </button>
    `;
}

function getCartItem(i) {
    return `
        <div class="cart_item">
            <p>${cart[i].name} - €${cart[i].price.toFixed(2)}</p>
        </div>
    `;
}