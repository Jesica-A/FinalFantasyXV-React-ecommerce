import React from 'react';
import './Item.css';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';

function Items (prop) {
    let id = prop.id;
    console.log(id);

    function onAdd (cantidad) {
        alert ('Agregaste ' + cantidad + ' al carrito');
    }
    return <div className='item-div'>
                <ul>
                    <li>{ prop.titulo }</li>
                    <li>${ prop.precio }</li>
                    <img src={ prop.imagen } class="image-item"></img>
                    <li><Link className='a-item' to={`/item/${prop.id}`}>Ver detalle</Link></li>
                </ul>
                <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            </div>
}

export default Items;