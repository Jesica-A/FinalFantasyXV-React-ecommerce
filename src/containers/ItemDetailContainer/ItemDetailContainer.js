import React from 'react';
import './ItemDetailContainer.scss';
import ReturnProducts from '../../components/Productos/Products'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons';

const ItemDetailContainer = () => {
   return (
      <div className="container">
         <div className="products single">
            <div className="container-inner">
               <ReturnProducts />  
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
