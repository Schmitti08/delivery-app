let subtotal = 0;
let totalAmount = 0;


function init() {
    let menu = document.getElementById('menuWrapper');
    menu.innerHTML = "";
    let responsiveBaskset = document.getElementById('headline-basket-resp');
    responsiveBaskset.innerHTML = showNameResponsiveBasket();

    for (let i = 0; i < myDishes.length; i++) {
        menu.innerHTML += menuCardTemplate(i);
    }

    renderBasket();
    renderResponsiveBasket();
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
            <p>Klicke bei deiner Lieblingspizza einfach auf "Hinzufügen"</p>`;
        totalAmount = 0;
        document.getElementById('total').innerHTML = totalAmount.toFixed(2);
    }
}

function renderResponsiveBasket() {
    let basket = document.getElementById('basketContentResponsive');
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
            <p>Klicke bei deiner Lieblingspizza einfach auf "Hinzufügen"</p>`;
        totalAmount = 0;
        document.getElementById('total').innerHTML = totalAmount.toFixed(2);
        return;
    }
    basket.innerHTML += basketAmount();
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

function openRespBasket() {
    document.getElementById('basketResponsive').classList.toggle('overlay');
    document.getElementById('basketContentResponsive-overlay').classList.toggle('d-none')
    renderResponsiveBasket();

}

function preventBubbling(event) {
    event.stopPropagation();
}

function showMenu() {
    let nav = document.getElementById("mobileNav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
} 
