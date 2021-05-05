import React, { useState } from "react";
import ItemCount from '../Itemcount/ItemCount';

const ItemDetail = ({product}) => {
    const [quantity, setQuantity] = useState(1);

    const itemQuantity = (value) => {
        setQuantity(value);
    }

    return (
        <div className="row">
            <div className="col-12 col-md-6">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="col-12 col-md-6">
                <h1 className="item-title">{product.name}</h1>
                <p>{product.description1}</p>
                <p>{product.description2}</p>
                <p>{product.description3}</p>
                <p>${product.price}</p>
                <ItemCount min={1} max={5} onAdd={itemQuantity} />
                <a className="btn">Comprar {quantity}</a>
            </div>
        </div>
    );
 }
export default ItemDetail;
