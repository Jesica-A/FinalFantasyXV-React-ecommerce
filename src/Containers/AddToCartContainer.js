import React from 'react';
import AddToCart from '../components/addToCart/AddToCart'

const AddToCartContainer = (qtyCounter) => {
    return (
        <div>
            <AddToCart qtyCounter={qtyCounter}/>
        </div>
    );
};

export default AddToCartContainer;


