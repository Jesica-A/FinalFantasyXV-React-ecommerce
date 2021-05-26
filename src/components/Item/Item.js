import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';

const Item = ({product}) => {
    return (
        <div className="product col-12 col-md-4">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <Link to={`/product/${product.id}`}>Ver detalles</Link>
        </div>
    );
 }
export default Item;
