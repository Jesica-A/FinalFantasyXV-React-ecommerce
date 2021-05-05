import React, { useState, useEffect } from 'react';
import rNoctis from '../../assets/img/products/rNoctis.jpg';
import Pocket_Ignis from '../../assets/img/products/Pocket_Ignis.jpg';
import Complete_FFXV from '../../assets/img/products/Complete_FFXV.jpg';
import Barbijo_Chocobos from '../../assets/img/products/Barbijo_Chocobos.jpg';
import Botella_Carbuncle from '../../assets/img/products/Botella_Carbuncle.jpg';
import Cartuchera_FFXV from '../../assets/img/products/Cartuchera_FFXV.jpg';
import Poster_Aranea from '../../assets/img/products/Poster_Aranea.jpg';
import Poster_Regis_y_Noctis from '../../assets/img/products/Poster_Regis_y_Noctis.jpg';
import Poster_Ardyn from '../../assets/img/products/Poster_Ardyn.jpg';
import Lunafreya_Nox_Fleuret from '../../assets/img/products/Lunafreya_Nox_Fleuret.jpg';
import Gladiolus_Amicitia from '../../assets/img/products/Gladiolus_Amicitia.jpg';
import Prompto_Argentum from '../../assets/img/products/Prompto_Argentum.jpg';
import ItemList from '../ItemList/ItemList';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const products = [
   {
      id: '1',
      name: 'Remera Real Noctis',
      description1: 'Remera 100% Algodon',
      description2: 'Unico color disponible',
      description3: 'Talles: del S al XXL',
      img: rNoctis,
      price: 1500
   },
   {
      id: '2',
      name: 'Remera Pocket Ignis',
      description1: 'Remera 100% Algodon',
      description2: 'Unico color disponible',
      description3: 'Talles: del S al XXL',
      img: Pocket_Ignis,
      price: 1000
   },
   {
      id: '3',
      name: 'Remera Complete FFXV',
      description1: 'Remera 100% Algodon',
      description2: 'Colores disponibles: Blanco, Negro',
      description3: 'Talles: del S al XXL',
      img: Complete_FFXV,
      price: 1300
   },
   {
      id: '4',
      name: 'Barbijo Chocobos',
      description1: 'Barbijo de Simil Neopren reversible',
      description2: 'Colores disponibles: Negro, Rosa, Blanco, Gris',
      description3: 'Tamaño: Adulto y Niño',
      img: Barbijo_Chocobos,
      price: 350
   },
   {
      id: '5',
      name: 'Botella Carbuncle',
      description1: 'Botella de Plastico de excelente calidad',
      description2: 'Colores disponibles: Negro, Rosa, Blanco',
      description3: 'Tamaño: 22cm', 
      img: Botella_Carbuncle,
      price: 600
   },
   {
      id: '6',
      name: 'Cartuchera FFXV',
      description1: 'Material: 100% Poliester',
      description2: 'Colores disponibles: Blanco, Negro',
      description3: 'Tamaño: 20cm x 15cm',
      img: Cartuchera_FFXV,
      price: 500
   },
   {
      id: '7',
      name: 'Poster Aranea',
      description1: 'Poster impreso en Papel Fotografico',
      description2: 'Unico color disponible',
      description3: 'Tamaño: 40x60cm',
      img: Poster_Aranea,
      price: 800
   },
   {
      id: '8',
      name: 'Poster Regis y Noctis',
      description1: 'Poster impreso en Papel Fotografico',
      description2: 'Unico color disponible',
      description3: 'Tamaño: 40x60cm',
      img: Poster_Regis_y_Noctis,
      price: 900
   },
   {
      id: '9',
      name: 'Poster Ardyn',
      description1: 'Poster impreso en Papel Fotografico',
      description2: 'Unico color disponible',
      description3: 'Tamaño: 40x60cm',
      img: Poster_Ardyn,
      price: 900
   },
   {
      id: '10',
      name: 'Lunafreya Nox Fleuret',
      description1: 'Figura coleccionable de Lunafreya',
      description2: 'Material: Polo Vinilo Cloruro (PVC)',
      description3: 'Tamaño: 15cm',
      img: Lunafreya_Nox_Fleuret,
      price: 3800
   },
   {
      id: '11',
      name: 'Gladiolus Amicitia',
      description1: 'Figura coleccionable de Gladiolus',
      description2: 'Material: Polo Vinilo Cloruro (PVC)',
      description3: 'Tamaño: 15cm',
      img: Gladiolus_Amicitia,
      price: 3500
   },{
      id: '12',
      name: 'Prompto_Argentum',
      description1: 'Figura coleccionable de Gladiolus',
      description2: 'Material: Polo Vinilo Cloruro (PVC)',
      description3: 'Tamaño: 15cm',
      img: Prompto_Argentum,
      price: 3500
   },
 ];
 
 const ReturnProducts = () => {
   const [prod, setProducts] = useState();
   const { id } = useParams();

   useEffect(() => {
     getProducts();
   }, []);

   const getProducts = () => {
     const promiseProducts = new Promise(resolve => {
        setTimeout(() => {
           resolve(products);
        }, 2000)        
     });
     promiseProducts.then((result) => {
        setProducts(result);
     });
   }

   if(!prod){
      return <p className="loading">Cargando...</p>;
   }

   if(id) {
      return (
         <div>
            {products.map(p =>{
               if(p.id === id) {
                 return <ItemDetail product={p} />
                }
            })}
         </div>
      )
   }else {
      return <ItemList products={products} />;
   }
}
 export default ReturnProducts;