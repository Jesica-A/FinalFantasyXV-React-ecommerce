import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <header>
            <nav>
                <ul className='productos'>
                    <h1 className="navbar-logo"><Link to='/home'>FFXV</Link></h1>
                    <ul className='nav-menu'>
                        <li><Link to='/historia'>Historia</Link></li>
                        <li><Link to='/juego'>Juego</Link></li>
                        <li><Link to='/'>Productos</Link></li>
                        <li><Link to='/contacto'>Contacto</Link></li>
                    </ul>
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;