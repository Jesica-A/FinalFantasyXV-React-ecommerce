import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

let productos = [
    { 
        id: '1', 
        title: 'Remera Real Noctis', 
        price: '1200', 
        pictureUrl: '/img/T-shirt_Real_Noctis.jpg',
        description: 'Remera 100% Algodon. Unico color disponible. Talles: del S al XXL'
    }, 
    { 
        id: '2', 
        title: 'Barbijo Chocobo', 
        price: '350', 
        pictureUrl: '/img/Barbijo_Chocobos.jpg',
        description: 'Barbijo de Simil Neopren reversible. Colores disponibles: Negro, Rosa, Blanco, Gris. Talles: Adulto y Niño'
    },
    { 
        id: '3', 
        title: 'Poster Aranea', 
        price: '700', 
        pictureUrl: '/img/Poster_Aranea.jpg', 
        description: 'Poster impreso en Papel Fotografico. Tamaño: 30x50cm'
    },
];

const getItem = new Promise ((res) => {
    res(productos)
});

    function ItemDetailContainer ({title}) {
        const [producto, setProducto] = useState([]);
        const {id} = useParams();

        useEffect(() => {
            getItem.then(x => {
                setTimeout(() => {
                    let itemId = x.filter(x => x.id == id);
                    setProducto(itemId[0]);
                }, 2000)
            });
        }, [])

        return <>
        <h1>{title}</h1>
        <ItemDetail item = {producto}/>
        </>
    }

export default ItemDetailContainer; 