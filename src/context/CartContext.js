import React, { useState} from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const totalCost = () => {
        const cost = cartProducts.reduce(
          (sum, product) => sum + product.price * product.count,
          0
        )
        return cost
      }

      const deleteItem = (item) => {
        for(var i = 0; i < cartProducts.length; i++){
            if ( cartProducts[i].id === item) {
                cartProducts.splice(i, 1);
            }
        }
        setCartProducts([...cartProducts])
    }

    return (
        <CartContext.Provider value={[cartProducts, setCartProducts, totalCost, deleteItem]}>
            {children}
        </CartContext.Provider>
    )
}
