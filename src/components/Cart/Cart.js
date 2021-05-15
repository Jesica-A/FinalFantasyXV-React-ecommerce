import React from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../../context/CartContext';
import deleteIcon from '../../assets/img/delete.png';
import './Cart.scss';

const Cart = () => {
    const { cartItems, deleteItem, totalPrice } = useCartContext();
    return (
      <div className="container cart">
         <div className="products single">
            <div className="title">
               <h1><div className="icon-my-computer"></div>Tu Compra</h1>
            </div>
            
            <div className="container-inner">
               {Object.keys(cartItems).length > 0 ? 

               <div>
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

                    {cartItems.map((item) => (
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
                    ))}            
                
                <p className="mt-2"><b>Total: ${totalPrice() ? totalPrice() : 0}</b></p>

                <h2>Tus datos</h2>
                <form>
                    <div className="row">
                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="Nombre"  />
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="Apellido"  />
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="E-mail" />
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="Confirmar e-mail" />
                        </div>
                        <Link to="/checkOut"><button className= "btn">Terminar compra</button></Link>
                    </div>
                </form>
            </div>
            : 'No hay productos en el carrito!' }
            </div>
            
            <div className="statusbar">
               <Link to={`/`}>
                  <div className="left">Volver a productos</div>
               </Link>
               <div className="right">&nbsp;</div>
            </div>
         </div>
      </div>
    )
 }
export default Cart;