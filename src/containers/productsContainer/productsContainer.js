import React, { useState, useEffect } from 'react';
import '../../components/Itemcount/ItemCount';
import { getFirestore } from '../../firebase';
import ItemList from '../../components/ItemList/ItemList';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons';

const ProductsContainer = () => {
   const [products, setProducts] = useState();
   const { category } = useParams();

   useEffect(() =>{
      const db = getFirestore();
      const productCollection = db.collection("products");
      const filterByCategory = productCollection.where("category", "==", category);
      filterByCategory.get().then((response) => {
          const aux = response.docs.map(element => {
              return element.data();
          })
          setProducts(aux);
      });
  }, [category]);

  return (
    <div className="container">
       <div className="products single">
          <div className="container-inner">
             {products ? <ItemList products={products} /> : 'Cargando...'}         
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

export default ProductsContainer;