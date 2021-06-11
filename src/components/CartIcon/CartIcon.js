import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

export const CartIcon = () => {
    const [cartProducts] = useContext(CartContext);
    const cartSize = () => {
        return cartProducts.reduce((sum, product) => sum + product.count, 0);
    }

    return (
            <Link to={'/cart'}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="badge white"> {cartSize()} </span>
            </Link>
    );
};
