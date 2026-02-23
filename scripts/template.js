function getMainDishes(i) {
  return `
<button onclick="addToCart(${i}, 'mainDishes')" class="dish">
    <div class="dish_header">
        <h3>${menu.mainDishes[i].name}
        </h3>
        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FF8001">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>

    </div><br>
    <p>${menu.mainDishes[i].description}</p><br>
    <div class="price">
        <br>
        <h3>€${menu.mainDishes[i].price.toFixed(2)}</h3>
    </div>
</button>
`;
}

function getDrinks(i) {
  return `
<button onclick="addToCart(${i}, 'drinks')" class="dish">
    <div class="dish_header">
        <h3>${menu.drinks[i].name}
        </h3>
        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FF8001">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>

    </div><br>
    <p>${menu.drinks[i].description}</p><br>
    <div class="price">
        <br>
        <h3>€${menu.drinks[i].price.toFixed(2)}</h3>
    </div>
</button>
`;
}

function getDesserts(i) {
  return `
<button onclick="addToCart(${i}, 'desserts')" class="dish">
    <div class="dish_header">
        <h3>${menu.desserts[i].name}
        </h3>
        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#FF8001">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>

    </div><br>
    <p>${menu.desserts[i].description}</p><br>
    <div class="price">
        <br>
        <h3>€${menu.desserts[i].price.toFixed(2)}</h3>
    </div>
</button>
`;
}

function getCartItem(i) {
  return `
<article class="cart_item">
    <section class="item_details">
        <p>${cart[i].name}</p>
        <p>€${(cart[i].price * cart[i].quantity).toFixed(2)}</p>


    </section>
    <section class="item_details">
        <div class="portions_control">
            <button onclick="piceMinusOne(${i})" aria-label="remove pice">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="#FF8001">
                    <path d="M200-440v-80h560v80H200Z" />
                </svg>
            </button>
            <p class="quantity">${cart[i].quantity} X</p>
            <button onclick="picePlusOne(${i})" aria-label="add pice">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="#FF8001">
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
            </button>
        </div>
        <button onclick="removeFromCart(${i})" aria-label="remove item">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FF8001">
                <path
                    d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
        </button>
    </section>

</article>
`;
}
function getTotalPrice(total, deliveryCost) {
  return `
<section class="price_details">
    <p>
        Lieferservice: €${deliveryCost.toFixed(2)}
    </p>
    <h4>Gesamt: €${(total + deliveryCost).toFixed(2)}</h4>
</section>
<section class="orders_control">
<button onclick="checkout()" class="checkout_button" aria-label="checkout">
    <p>Zur Kasse</p>
</button>
<button onclick="emptyCart()" class="emptycart_button" aria-label="empty cart">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffefe"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
</button>

`;
}

function getMobileTotalPrice(total, deliveryCost) {
  return `
<section>
    <p>
        Lieferservice: €${deliveryCost.toFixed(2)}
    </p>
    <h4>Gesamt: €${(total + deliveryCost).toFixed(2)}</h4>
</section>
<section class="orders_control">
<button onclick="checkout()" class="checkout_button">
    <p>Zur Kasse</p>
</button>
<button onclick="emptyCart()" class="emptycart_button">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fffefe"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
</button>

`;
}
