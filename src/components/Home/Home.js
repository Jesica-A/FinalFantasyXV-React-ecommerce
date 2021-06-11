import React from 'react'
import './Home.scss'
import ItemListContainer from '../../containers/ItemListContainer';
import Item from '../item/Item';

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