import React from 'react';
import './Item.css';
import ItemCount from '../itemCount/ItemCount';

function Items (prop) {
    function onAdd (cantidad) {
        alert ('Agregaste ' + cantidad + ' al carrito');
    }
    return <div className='item-div'>
                <ul>
                    <li>{ prop.titulo }</li>
                    <li>${ prop.precio }</li>
                    <img src={ prop.imagen } class="image-item"></img>
                    <li><a className='a-item' href='/'>Ver detalle</a></li>
                </ul>
                <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            </div>
}

export default Items