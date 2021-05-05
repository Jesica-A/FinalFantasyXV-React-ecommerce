import React from 'react';
import './Home.scss';
import '../../components/Itemcount/ItemCount';
import ReturnProducts from '../../components/Productos/Products'

const Home = ({greeting}) => {
   return (
      <div className="container">
         <div className="mainTitle_container">
            <h1 className="mainTitle">{greeting}</h1>
         </div>
         <div className="products">
            <div className="title">
               <h1><div className="icon-my-computer"></div> Catalogo de Productos</h1>
            </div>
            <div className="container-inner">
               <ReturnProducts />
            </div>
            <div className="statusbar">
               <div className="right">&nbsp;</div>
            </div>
            </div>
      </div>
   );
}
export default Home;
