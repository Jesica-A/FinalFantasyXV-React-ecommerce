import React from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../../context/CartContext';
import './Cart.scss';
import deleteIcon from '../../assets/img/delete.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const { cartItems, deleteItem, totalPrice } = useCartContext();
    return (
        <div className="container cart">
            <div className="products single">
                <div className="title">
                    <h1>Carrito</h1>
                </div>
            
                <div className="container-inner"> 
                    <h2>Tu compra</h2>
                    <div className="d-none d-md-flex row titulo">
                        <div className="col-12 col-md-4">
                            <p>Producto(s)</p>
                        </div>
                        <div className="col-12 col-md-3">
                            <p>Precio por unidad</p>
                        </div>
                        <div className="col-12 col-md-3">
                            <p>Subtotal</p>
                        </div>
                        <div className="col-12 col-md-2">
                            <p>Eliminar item</p>
                        </div>
                    </div>

                    {Object.keys(cartItems).length > 0 ?
                        cartItems.map((item) => (
                            <div key={item.id} className="row">
                                <div className="col-12 col-md-4">
                                    <p>{item.name} (x{item.quantity})</p>
                                </div>
                                <div className="col-12 col-md-3">
                                    <p>${item.price}</p>
                                </div>
                                <div className="col-12 col-md-3">
                                    <p>${item.price * item.quantity}</p>
                                </div>
                                <div className="col-12 col-md-2">
                                    <button onClick={() => {deleteItem(item.id)}}>
                                        <img src={deleteIcon} alt="Delete Icon" />
                                    </button>
                                </div>
                            </div>
                        ))
                    : 'No hay productos en el carrito :('}           
                    <p className="mt-2"><b>Total: ${totalPrice() ? totalPrice() : 0}</b></p>
                </div>
            
                <div className="statusbar">
                    <Link to={`/`}>
                        <div className="left"><FontAwesomeIcon icon={faAngleDoubleLeft} />Volver a productos</div>
                    </Link>
                    <div className="right">&nbsp;</div>
                </div>
            </div>
        </div>
    )
}
export default Cart;