import React from 'react';
import AddToCart from '../Components/AddToCart/AddToCart'

const AddToCartContainer = (qtyCounter) => {
    return (
        <div>
            <AddToCart qtyCounter={qtyCounter}/>
        </div>
    );
};

export default AddToCartContainer;


