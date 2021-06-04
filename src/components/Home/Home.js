import React from 'react'
import './Home.scss'
import ItemListContainer from '../../Containers/ItemListContainer';
import Item from '../Item/Item';

export default function Home() {

    return (
        <div className="container">
            <div className="products">
                <div className="title">
                    <h1>productos</h1>
                </div>
                {Item ? <ItemListContainer product={Item} /> : 'Cargando...'}
            </div>
        </div>
    )
}