import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css';

function itemDetail ({item}) {
    function onAdd (cantidad) {
        alert ('Agregaste ' + cantidad + ' al carrito');
        }
    return <div className='item-div'>
                    <ul>
                        <li>{ item.title }</li>
                        <li>${ item.price }</li>
                        <img src={ item.imagen } class="image-item"></img>
                        <li>{item.description}</li>
                        <li>ID:{ item.id }</li>
                    </ul>
                    <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </div>
}

export default itemDetail; 
