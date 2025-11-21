let subtotal = 0;
let totalAmount = 0;


function init() {
    let menu = document.getElementById('menuWrapper');
    menu.innerHTML = "";

    for (let i = 0; i < myDishes.length; i++) {
        menu.innerHTML += menuCardTemplate(i);
    }

    renderBasket();
    console.log(myDishes);

}

function addToBasket(i) {
    myDishes[i].amount++;
    sumBasket();
    init();
}

function renderBasket() {
    let basket = document.getElementById('basketContent');
    basket.innerHTML = "";

    let isItemInBasket = false;

    for (let i = 0; i < myDishes.length; i++) {
        if (myDishes[i].amount > 0) {
            isItemInBasket = true;
            basket.innerHTML += basketTemplate(i);
        }
    }
    if (!isItemInBasket) {
        basket.innerHTML = `<h4>Dein Warenkorb ist leer.</h4>
            <p>Klicke bei deine lieblings Pizza einfach auf "Hinzufügen"</p>`;
        totalAmount = 0;
        document.getElementById('total').innerHTML = totalAmount.toFixed(2);
    }
}

function removeOneItem(i) {
    myDishes[i].amount--;
    sumBasket();
    init();
}

function addOneItem(i) {
    myDishes[i].amount++;
    sumBasket();
    init();
}

function deleteItem(i) {
    myDishes[i].amount = 0;
    sumBasket();
    init();
}

function sumBasket() {
    let arrTotalPrice = [];
    for (let i = 0; i < myDishes.length; i++) {
        let totalPrice = myDishes[i].sumPrice();
        arrTotalPrice.push(totalPrice);
    }
    subtotal = arrTotalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    document.getElementById('subtotal').innerHTML = subtotal.toFixed(2);
    finalSum();
    init();
}

function finalSum() {
    totalAmount = subtotal + 5;
    document.getElementById('total').innerHTML = totalAmount.toFixed(2);
    init();
}


