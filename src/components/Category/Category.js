import React from 'react'
import { Link } from 'react-router-dom';
import '../Item/Item.scss';

const Category = ({product}) => {
    return (
        <div className="product col-12 col-md-4">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <Link to={`/products/${product.id}`}>Ver detalles</Link>
        </div>
    );
 }
export default Category;
