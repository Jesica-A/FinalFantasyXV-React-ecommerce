import React, { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import './Home.scss';
import '../../components/Itemcount/ItemCount';
import { getFirestore } from '../../firebase'
import ItemList from '../../components/ItemList/ItemList';


const Home = ({greeting}) => {
   const [products, setProducts] = useState([]);
   const {id} = useParams()

   useEffect(() => {
      const db = getFirestore()
      const productCollection = db.collection("products")

      productCollection.get().then((response) => {
          const aux = response.docs.map(element => {
            return element.data();
          })
          setProducts(aux);
      });
  }, [id]);
   
   return (
      <div className="container">
         <div className="mainTitle_container">
            <h1 className="mainTitle">{greeting}</h1>
         </div>
         <div className="products">
            <div className="title">
               <h1>Catalogo de Productos</h1>
            </div>
            <div className="container-inner">
               {products ? <ItemList products={products} /> : 'Cargando...' }
            </div>
            <div className="statusbar">
               <div className="right">&nbsp;</div>
            </div>
         </div>
      </div>
   );
}
export default Home;
