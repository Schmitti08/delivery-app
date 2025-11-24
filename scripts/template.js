function menuCardTemplate(dish, index) {
    return `
    <section class="menu_card">
        <div>
            <h3>${dish.name}</h3>
            <p class="txt-color-sec">${dish.description}</p>
            <p class="txt-price">${dish.price.toFixed(2)} €</p>
        </div>
        <div class="menu_card_right">
            <button onclick="addToBasket(${index})" class="btn">Hinzufügen</button>
        </div>
    </section>`;
}

function basketTemplate(i) {
    return `    <div class="basket-item">
                        <div>
                            <h3>${myDishes[i].name}</h3>
                        </div>
                        <div class="item-details">
                            <button onclick = "removeOneItem(${i})" class="btn-count">-</button>
                            <p id="item-amount">${myDishes[i].amount}</p>
                            <button onclick = "addOneItem(${i})" class="btn-count">+</button>
                            <p id="item-sum">${myDishes[i].sumPrice().toFixed(2)}</p> €
                            <img onclick = "deleteItem(${i})" src="./assets/img/delete.svg" alt="delete">
                 </div>
    `;
}

function responsiveItem(dish, index) {
    return `
    <section class="menu_card">
        <div>
            <h3>${dish.name}</h3>
            <p class="txt-color-sec">${dish.description}</p>
            <p class="txt-price">${dish.price.toFixed(2)} €</p>
        </div>
        <div class="menu_card_right">
            <button onclick="addToBasket(${index})" class="btn-count">+</button>
        </div>
    </section>`;
}


function basketAmount() {
    return `
                 <div class="basket-worth">
                    <div class="flx txt-color-sec">
                        <p style="width: 165px;">Zwischensumme:</p>
                        <p> ${subtotal.toFixed(2)}</p> €
                    </div>
                    <div class="flx txt-color-sec">
                        <p style="width: 165px;">Liefergebühr:</p>
                        <p>5,00</p> €
                    </div>
                    <div class="flx txt-bold">
                        <p style="width: 165px;">Gesamtkosten:</p>
                        <p> ${totalAmount.toFixed(2)}</p> €
                    </div>
                </div>
                <div class="order">
                        <button id="orderBtn" class="order-btn" onclick="sendOrder()">Bestellen</button>
                </div>
    `;
}

function showNameResponsiveBasket() {
    return `
        <h3">Warenkorb ${totalAmount.toFixed(2)} €</h3>
    `
}


