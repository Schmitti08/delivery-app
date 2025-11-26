let subtotal = 0;
let totalAmount = 0;
let currentCategory = 'pizza';


function init() {
    renderMenu();
    renderBasket();
    renderResponsiveBasket();
    showRespBasketMenu();
}



function renderMenu() {
    let menu = document.getElementById('menuWrapper');
    menu.innerHTML = "";

    const isMobile = window.matchMedia("(max-width: 450px)").matches;
    const filteredItems = myDishes.filter(dish => dish.category === currentCategory);

    filteredItems.forEach((dish, i) => {
        const realIndex = myDishes.indexOf(dish);
        if (isMobile) {
            menu.innerHTML += responsiveItem(dish, realIndex);
        } else {
            menu.innerHTML += menuCardTemplate(dish, realIndex);
        }
    });
}

function showRespBasketMenu() {
    let responsiveBaskset = document.getElementById('headline-basket-resp');
    responsiveBaskset.innerHTML = showNameResponsiveBasket();
}

function addToBasket(i) {
    myDishes[i].amount++;
    sumBasket();
    renderBasket();
    renderResponsiveBasket();
    showRespBasketMenu();
}

function renderAnyBasket(id) {
    let basket = document.getElementById(id);
    basket.innerHTML = "";

    let isItemInBasket = false;

    for (let i = 0; i < myDishes.length; i++) {
        if (myDishes[i].amount > 0) {
            isItemInBasket = true;
            basket.innerHTML += basketTemplate(i);
        }
    }
    if (!isItemInBasket) {
        emptyBasket(basket);
    }
}

function renderBasket() {
    renderAnyBasket('basketContent')
}

function renderResponsiveBasket() {
    renderAnyBasket('basketContentResponsive');
}

function emptyBasket(basket) {
    basket.innerHTML = `<h4>Dein Warenkorb ist leer.</h4>
            <p>Klicke bei deiner Lieblingspizza einfach auf "Hinzufügen"</p>`;
    totalAmount = 0;
    document.getElementById('total').innerHTML = totalAmount.toFixed(2);
}

function removeOneItem(i) {
    myDishes[i].amount--;
    sumBasket();
    renderBasket();
    renderResponsiveBasket();
    showRespBasketMenu();
}

function addOneItem(i) {
    myDishes[i].amount++;
    sumBasket();
    renderBasket();
    renderResponsiveBasket();
    showRespBasketMenu();
}

function deleteItem(i) {
    myDishes[i].amount = 0;
    sumBasket();
    renderBasket();
    renderResponsiveBasket();
    showRespBasketMenu();
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
    renderBasket();
    renderResponsiveBasket()
}

function finalSum() {
    totalAmount = subtotal + 5;
    document.getElementById('total').innerHTML = totalAmount.toFixed(2);
    renderBasket();
    renderResponsiveBasket();
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

function sendOrder() {
    let btn = document.getElementById('orderBtn');
    if (parseFloat(totalAmount) <= 1) {
        alert("Bitte eine Bestellung hinzfügen.");
    } else {
        alert("Deine Bestellung war erfolgreich!")
        location.reload();
    }
}

function alertEdit() {
    alert("Die Seite befindet sich im Aufbau.")
}

function filterCategory(category) {
    currentCategory = category;
    renderMenu();
}

window.addEventListener('resize', () => {
    renderMenu();
});