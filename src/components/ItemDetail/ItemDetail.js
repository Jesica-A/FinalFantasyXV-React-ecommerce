import React from 'react';
import { Link } from 'react-router-dom';
import ItemCountContainer from '../../Containers/ItemCountContainer'
import AddToCart from '../AddToCart/AddToCart';
import './ItemDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons';

const ItemDetail = ({ product, itemqty, addtocart }) => {
    return (
        <div className='container'>
            <div className="row products single">
                <div className="col-12 col-md-6">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="col-12 col-md-6">
                    <h3>{product.name}</h3>
                    <p>{product.description1}</p>
                    <p>{product.description2}</p>
                    <p>{product.description3}</p>
                    <p>${product.price}</p>
                    <ItemCountContainer min={1} max={30} handleClick={addtocart} />
                    <AddToCart qtyCounter={itemqty} product={product} />
                </div>
                <div className="statusbar">
                    <Link to={`/`}>
                        <div className="left"><FontAwesomeIcon icon={faAngleDoubleLeft} />Volver a productos</div>
                    </Link>
                </div>
            </div>
        </div>
        
    );
}

export default ItemDetail;