import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar () {
    return (
        <header>
            <nav>
                <ul className='productos'>
                    <h1 className="navbar-logo">FFXV</h1>
                    <ul className='nav-menu'>
                        <li><a href='/'>Historia</a></li>
                        <li><a href='/'>Juego</a></li>
                        <li><a href='/'>Productos</a></li>
                        <li><a href='/'>Contacto</a></li>
                    </ul>
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;