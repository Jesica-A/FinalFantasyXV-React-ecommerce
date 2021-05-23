import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import { useParams } from "react-router-dom";
import './ItemDetailContainer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons';


const ItemDetailContainer = () => {
   const [productId, setProductId] = useState({});
   const {id} = useParams();
   useEffect(() =>{
      const db = getFirestore();
      const productCollection = db.collection("products");
      const filterByProduct = productCollection.where("id", "==", id);
         filterByProduct.get().then((response) => {
            const aux = response.docs.map(element => {
               return element.data();
            });
            setProductId(aux[0]);
         });
      }, [id]);


      return (
         <div className="container">
            <div className="products single">
               <div className="container-inner">
                  {productId ? <ItemDetail product={productId} /> : 'Cargando...'}           
               </div>
               <div className="statusbar">
                  <Link to={`/`}>
                     <div className="left"><FontAwesomeIcon icon={faAngleDoubleLeft} />Volver a productos</div>
                  </Link>
                  <div className="right">&nbsp;</div>
               </div>
            </div>
         </div>
      );
 }
export default ItemDetailContainer;
