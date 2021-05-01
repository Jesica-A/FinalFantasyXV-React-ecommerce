import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';

let productos = [
    { 
        title: 'Remera Real Noctis', 
        price: '1200', 
        pictureUrl: '/img/T-shirt_Real_Noctis.jpg'
    }, 
    { 
        title: 'Barbijo Chocobo', 
        price: '350', 
        pictureUrl: '/img/Barbijo_Chocobos.jpg' 
    },
    { 
        title: 'Poster Aranea', 
        price: '700', 
        pictureUrl: '/img/Poster_Aranea.jpg' 
    },
    { 
        title: 'Remera Aranea', 
        price: '1000', 
        pictureUrl: '/img/Pocket_Aranea.jpg' 
    },
    { 
        title: 'Poster Noctis y Regis', 
        price: '800', 
        pictureUrl: '/img/Poster_Regis_y_Noctis.jpg' 
    },
    { 
        title: 'Remera Lunafreya', 
        price: '1200', 
        pictureUrl: '/img/Pocket_Lunafreya.jpg' 
    },
    { 
        title: 'Figura Prompto', 
        price: '1800', 
        pictureUrl: '/img/Poster_Aranea.jpg' 
    },
    { 
        title: 'Mochila FFXV', 
        price: '900', 
        pictureUrl: '/img/Poster_Aranea.jpg' 
    },
    { 
        title: 'Botella Carbuncle', 
        price: '600', 
        pictureUrl: '/img/Botella_Carbuncle.jpg' 
    },
    { 
        title: 'Figura Cindy', 
        price: '1800', 
        pictureUrl: '/img/Cindy_Aurum.jpg' 
    }
];

const promise = new Promise ((res) => {
    res(productos);
});

function List ({title}) {

    const [item, setItem] = useState([]);

    useEffect(() => {
            promise.then(x => {
        setTimeout(() => {
            setItem(x);
        }, 2000);

    });
    }, []);


    return <>
    <h1>{title}</h1>
    <ItemList items={item}/>
    </>
}

export default List