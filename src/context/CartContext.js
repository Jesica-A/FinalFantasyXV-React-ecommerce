import { createContext, useContext, useEffect, useState} from 'react';

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() =>{

    },[cartItems])


    const handleCartItems = (product, quantity) => {
        const productInCart = cartItems.find((p) => p.id === product.id);
        if(productInCart){
            productInCart.quantity += quantity;
            setCartItems([...cartItems]);
        }else{
            setCartItems([...cartItems, {...product, quantity}]);
        }
    }

    const ItemCount = () => {
        return cartItems.reduce((acc, p) => (acc += p.quantity), 0);
    }

    const deleteItem = (item) => {
        for(var i = 0; i < cartItems.length; i++){
            if ( cartItems[i].id === item) {
                cartItems.splice(i, 1);
            }
        }
        setCartItems([...cartItems])
    }
    
    const totalPrice = () => {
        return cartItems.reduce((a, b) => a + (b.price * b.quantity), 0);
    }

    return <CartContext.Provider value={{cartItems, ItemCount, handleCartItems, deleteItem, totalPrice}}>{children}</CartContext.Provider>
}

export default useCartContext;