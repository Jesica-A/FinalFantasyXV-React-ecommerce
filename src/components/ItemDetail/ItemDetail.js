import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import ItemCount from '../Itemcount/ItemCount';
import useCartContext from '../../context/CartContext';


const ItemDetail = ({product}) => {
    const { handleCartItems } = useCartContext();
    const [quantity, setQuantity] = useState(1);
    const [changebtn, setChangebtn] = useState(true)

    const itemQuantity = (value) => {
        setQuantity(value);
    }

    const addTo = () => {
        handleCartItems({id: product.id, name: product.name, price: product.price}, quantity);
        setChangebtn(!changebtn)
    }

    return (
        <div className="row">
            <div className="col-12 col-md-6">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="col-12 col-md-6">
                <h1 className="item-title">{product.name}</h1>
                <p>{product.description1}</p>
                <p>{product.description2}</p>
                <p>{product.description3}</p>
                <p>${product.price}</p>
                <ItemCount min={1} max={5} onAdd={itemQuantity} />
                {changebtn ? <a onClick={addTo} className="btn">Comprar {quantity}</a> : <Link to={"/cart"}><a className="btn">Terminar Compra</a></Link> }
            </div>
        </div>
    );
 }
export default ItemDetail;
