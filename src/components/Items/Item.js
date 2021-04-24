import React from 'react';
import './Item.css';
import ItemCount from '../itemCount/ItemCount';

function onAdd (cantidad) {
    alert ('Agregaste ' + cantidad + ' al carrito');
}

function Items (prop) {
    return <div className='item-div'>
            <ul>
                <li>{ prop.titulo }</li>
                <li>{ prop.precio }</li>
                <li>{ prop.imagen }</li>
                <li>{ prop.id }</li>
            </ul>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
}

export default Items