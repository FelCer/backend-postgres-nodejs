'use strict';

const { Categories, Products, Purchase } = require('./db.js');

Categories.destroy({ where: {} })
    .then(() => Categories.bulkCreate([
        {
            name: "A la Parrilla"
        },
        {
            name: "A la Plancha"
        },
        {
            name: "Hot Dogs"
        },
        {
            name: "Bebidas"
        },
        {
            name: "Postres"
        },
        {
            name: "Ensaladas"
        }
    ])
        .then(() => console.log('finished populating Categories'))
        .catch(err => console.log('error populating Categories', err))
    );

Products.destroy({ where: {} })
    .then(() => Products.bulkCreate([
        {
            name: "CORRALISIMA 1/2 LIBRA",
            categories:[
                1
            ],
            available: true,
            bestSeller: true,
            price: "35000",
            img: "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964",
            description: "Media libra de carne de res asada a la parrilla, con salsa BBQ."
        },
        {
            name: "CORRALISIMA 3/4 LIBRA",
            categories:[
                1,
                2
            ],
            available: true,
            bestSeller: false,
            price: "40000",
            img: "https://media.istockphoto.com/photos/meal-with-burger-and-fried-potatoes-picture-id1065484168",
            description: "Tres cuartos de  libra de carne de res asada a la parrilla, con salsa BBQ."
        },
        {
            name: "LA VACA QUE RIE 1/2 LIBRA",
            categories:[
                1
            ],
            available: true,
            bestSeller: false,
            price: "55000",
            img: "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964",
            description: "Media libra de carne de la vaca que rie."
        },
        {
            name: "Pizza PAPA JONES",
            categories:[
                1
            ],
            available: true,
            bestSeller: true,
            price: "35000",
            img: "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964",
            description: "Pizza personal."
        },
        {
            name: "HOG DOGS",
            categories:[
                1
            ],
            available: true,
            bestSeller: true,
            price: "75000",
            img: "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964",
            description: "Hog dogs por docena"
        },
        {
            name: "ZIPOTE BURRO",
            categories:[
                1
            ],
            available: true,
            bestSeller: true,
            price: "22000",
            img: "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964",
            description: "Zipote con todos los ingredientes."
        },
        {
            name: "QBANO",
            categories:[
                1
            ],
            available: true,
            bestSeller: true,
            price: "35000",
            img: "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964",
            description: "Q'bano  mediano sin lechuga."
        },
        {
            name: "FX pizzas",
            categories:[
                1
            ],
            available: true,
            bestSeller: true,
            price: "35000",
            img: "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964",
            description: "Fx las mejores pizzas del mundo."
        },
        {
            name: "SALCHICHA RANCHERAS",
            categories:[
                1
            ],
            available: true,
            bestSeller: true,
            price: "12000",
            img: "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964",
            description: "Paquete a mitad de precio!!!"
        },
        {
            name: "GALAPAGOS 1 LIBRA",
            categories:[
                1
            ],
            available: true,
            bestSeller: true,
            price: "28000",
            img: "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964",
            description: "Una libra de carne de res encebollada."
        },
        {
            name: "HAMBURGESAS EL CHAVO 1 LIBRA",
            categories:[
                1
            ],
            available: true,
            bestSeller: true,
            price: "28000",
            img: "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964",
            description: "Una hamburgesa el chavo, no quedaras con hambre!!"
        }
    ])
        .then(() => console.log('finished populating Products'))
        .catch(err => console.log('error populating Products', err))
    );