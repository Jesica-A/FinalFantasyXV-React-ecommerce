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
    <ItemList prop={item}/>
    </>
}

export default List