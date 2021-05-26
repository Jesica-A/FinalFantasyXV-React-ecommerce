import React, { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import './Home.scss';
import '../../components/Itemcount/ItemCount';
import { getFirestore } from '../../firebase'
import ItemList from '../../components/ItemList/ItemList';

/*
const Home = ({greeting}) => {
   //const [products, setProducts] = useState();

   const [products, setProducts]=useState([]);
   const [loading, setLoading] = useState(false);
   useEffect(() =>{
      const db = getFirestore();
      const productCollection = db.collection("products");

      productCollection.get().then((querySnapShot) => {
         querySnapShot.size === 0 ? console.log("No hay items") : console.log(`Hay ${querySnapShot.size} items`)
         const documentos = querySnapShot.docs.map((doc) => {
            console.log(doc)
            return {
               id: doc.id,
               ...doc.data()
            }
         });
         setProducts(documentos)
      })
      .catch((err) => console.log("Ocurrio un error", err))
      .finally(()=>setLoading(false))
   }, []);

   useEffect(()=> {
      products.lenght && console.log(products)
   }, [products])

*/

const Home = ({greeting}) => {
   const [products, setProducts] = useState([]);
   const {id} = useParams()

   useEffect(() => {
      const db = getFirestore()
      const productCollection = db.collection("products")


      /*const item = productCollection.doc(itemId)

      item.get().then((doc)=>{
         if (!doc.exists) {
             console.log("Item no existe")
             return;
         }  
         setProducts({ id: doc.id, ...doc.data() });
         console.log(products)
     })
     .catch((err)=>{console.log("error:", err)})            
 }, [])*/

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
