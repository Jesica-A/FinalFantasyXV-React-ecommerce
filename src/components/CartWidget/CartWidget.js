import React from 'react';
import { Link } from 'react-router-dom';
import './CartWidget.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
   return (
      <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
      );
}

export default CartWidget;
