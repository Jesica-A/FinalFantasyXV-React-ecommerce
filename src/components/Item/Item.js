import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss'


const Item = ({ item:
    { 
        id, 
        name,  
        image } 
    }) => (
            <div className="product col-12 col-md-4">
                <img src={image} alt="imagen de producto"/>
                <h3>{name}</h3>
                <Link to={`/item/${id}`}>
                    <button className='btn'>Ver producto</button>
                </Link>
            </div>
)
export default Item;


