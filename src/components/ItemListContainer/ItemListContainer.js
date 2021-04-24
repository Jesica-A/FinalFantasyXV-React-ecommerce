import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';

let productos = [
    { 
        id: 'AAA000', 
        title: 'Remera Real Noctis', 
        price: '1200', 
        pictureUrl: '../img/productos/T-shirt_Real_Noctis' 
    }, 
    { 
        id: 'BBB000', 
        title: 'Barbijo Chocobo', 
        price: '350', 
        pictureUrl: 'insertarIMAGEN' 
    },
    { 
        id: 'CCC000', 
        title: 'Poster Aranea', 
        price: '700', 
        pictureUrl: 'insertarIMAGEN' 
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
            setItem(x)
        })
    });
    }, []);


    return <>
    <h1>{title}</h1>
    <ItemList prop={item}/>
    </>
}

export default List;