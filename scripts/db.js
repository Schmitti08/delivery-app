let myDishes = [
    {
        "name": "Pizza Margherita",
        "price": 11.90,
        "description": "Tomatensauce, Mozzarella, Oregano",
        "amount": 0,
        "note": "",
        "sumPrice": function () {
            return this.amount * this.price;
        },
    },
    {
        "name": "Pizza Prosciutto",
        "price": 14.90,
        "description": "Tomatensauce, Mozzarella, gekochter Schinken",
        "amount": 0,
        "note": "",
        "sumPrice": function () {
            return this.amount * this.price;
        },
    },
    {
        "name": "Pizza Spinaci",
        "price": 15.90,
        "description": "Tomatensauce, Mozzarella, frische Tomaten, Spinat, Knoblauch",
        "amount": 0,
        "note": "",
        "sumPrice": function () {
            return this.amount * this.price;
        },
    },
    {
        "name": "Pizza Vegetariana",
        "price": 16.50,
        "description": "Tomatensauce, Mozzarella, frische Tomaten, milde Peperoni, Spinat, Artischocken, Knoblauch",
        "amount": 0,
        "note": "",
        "sumPrice": function () {
            return this.amount * this.price;
        },
    },
    {
        "name": "Pizza Valdostana",
        "price": 18.90,
        "description": "Tomatensauce, Mozzarella, frische Tomaten, gekochter Schinken, Parmesan, Rucola",
        "amount": 0,
        "note": "",
        "sumPrice": function () {
            return this.amount * this.price;
        },
    },
    {
        "name": "Pizza Lönie (Vegan)",
        "price": 16.90,
        "description": "veganer Mozzarella, vegane Salami, Gewürzgurken, Zwiebelen",
        "amount": 0,
        "note": "",
        "sumPrice": function () {
            return this.amount * this.price;
        },
    },
];