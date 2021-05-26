import React from 'react';
import { Link } from 'react-router-dom';
import './CartWidget.scss';
import useCartContext from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
   const { ItemCount } = useCartContext();
   return (
      <div>
         <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} />{ItemCount()}</Link>
      </div>
      );
}

export default CartWidget;
