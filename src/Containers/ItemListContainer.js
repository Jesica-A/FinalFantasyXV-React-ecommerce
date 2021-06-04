import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Components/Item/Item'
import { getFirestore } from './../firebase/index'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams(); 

    useEffect(() => {
        const db = getFirestore();
        let docRef;

        if(categoryId){
            docRef = db.collection("products").where("categoryId", "==", categoryId);
        }else{
            docRef=db.collection("products");
        }

        docRef.get().then((querySnapshot) => {
            if (querySnapshot.size === 0){
                console.log("Sin resultados");
            }
            setProducts(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id }))); 
        });
    }, [categoryId]) 
    
    return (
            <div className="row">
                {products.map((product) => (
                    <Item key= {product.id} item={product}
                    />
                    )
                )}
            </div>
    );
};     
export default ItemListContainer;