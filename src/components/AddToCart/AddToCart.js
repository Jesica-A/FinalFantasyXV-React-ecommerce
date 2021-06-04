import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../../Context/cartContext'

function AddToCart({ qtyCounter, product }) {
    const [cartProducts, setCartProducts] = useContext(CartContext);
    const [changebtn, setChangebtn] = useState(true)
    const handleClick = () => {
        let cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            description1: product.description1,
            description2: product.description2,
            description3: product.description3,
            count: qtyCounter
        }
        setChangebtn(!changebtn)

        if (cartProducts.find((product) => product.id === cartItem.id)) {
            const newCartProducts = cartProducts.map((product) => {
                if (product.id === cartItem.id) {
                    return { ...product, count: cartItem.count + product.count }
                }
                return product
            })
            setCartProducts(newCartProducts)
        } else {
            setCartProducts([...cartProducts, cartItem])
        }
    }      
    return (
        <div>
            {changebtn ? <button className="btn" onClick={handleClick} className="btn">Añadir al carrito</button> : <Link to={"/cart"}><button className="btn">Terminar Compra</button></Link> }
        </div>
    );
}

export default AddToCart;