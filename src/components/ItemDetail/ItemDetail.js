import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css';

function itemDetail ({prop}) {
    function onAdd (cantidad) {
        alert ('Agregaste ' + cantidad + ' al carrito');
        }
    return prop.map(x => <div className='item-div'>
                    <ul>
                        <li>{ x.title }</li>
                        <li>${ x.price }</li>
                        <img src={ prop.imagen } class="image-item"></img>
                        <li>{x.description}</li>
                        <li>ID:{ x.id }</li>
                    </ul>
                    <ItemCount stock={100} initial={1} onAdd={onAdd}/>
    </div>);
}

export default itemDetail; 
