import React, { useContext } from 'react';
import { CartContext } from '../../Context/cartContext'
import CartForm from './CartForm';
import deleteIcon from '../../assets/delete.png';
import './cart.scss'

function Cart({ createOrder, orderId }) {
    const [cartProducts, setCartProducts, totalCost, deleteItem] = useContext(CartContext);
    if (orderId) {
        return (
            <div className="container cart">
                <div className="products single">
                    <div className="container-inner">
                        <h3>¡Gracias por tu compra! </h3>
                        <p>
                            El código de tu compra es: {orderId}
                        </p>
                        <hr />
                        <p className="mb-0">
                            Ya te estamos enviando un e-mail con la información de tu orden
                        </p>
                        <a href='/' className="btn" >Nueva compra</a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container cart">
            <div className="products single">
                <div className="container-inner">
                    {cartProducts.length ?
                        <div>
                            <h2>Resumen de tu compra:</h2>
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
                            
                            {cartProducts.map((product) => (
                                <div key={product.id} className="row">
                                    <div className="col-12 col-md-4">
                                        <p>{product.name} (x{product.count})</p>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <p>${product.price}</p>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <p>${product.price * product.count}</p>
                                    </div>
                                    <div className="col-12 col-md-2">
                                        <button onClick={() => {deleteItem(product.id)}}>
                                            <img src={deleteIcon} alt="Delete Icon" />
                                        </button>
                                    </div>
                                </div>
                            ))}

                            
                            <p className="mt-2"><b>Total: ${totalCost() ? totalCost() : 0}</b></p>
                        </div>
                        :
                        <h2>Tu carrito está vacío</h2>
                    }
                </div>
            </div>

            <CartForm createOrder={createOrder} />
        </div>
    );
}

export default Cart;