import React, { useContext, useState } from 'react';
import Cart from '../components/cart/Cart'
import 'firebase/firestore'
import firebase from 'firebase/app';
import '@firebase/auth'
import { getFirestore } from '../firebase'
import { CartContext } from "../context/cartContext";

const CartContainer = () => {
    const [cartProducts, setCartProducts, totalCost] = useContext(CartContext);
    const [orderId, setOrderId] = useState()

    async function createOrder(buyer) {
        const db = getFirestore()
        const orders = db.collection('orders')
        const newOrder = {
            buyer,
            cartProducts,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            state: "created",
            total: totalCost()
        }
        try {
            const { id } = await orders.add(newOrder)
            setOrderId(id)
        } catch (err) {
            console.log('Error')
        }
    }
    return (
        <div>
            <Cart createOrder={createOrder} orderId={orderId} />
        </div>
    );
};

export default CartContainer;