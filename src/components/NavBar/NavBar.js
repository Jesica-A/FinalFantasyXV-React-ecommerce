import React from 'react';
import '../cartIcon/CartIcon';
import { CartIcon } from '../cartIcon/CartIcon'; 
import { Link } from 'react-router-dom'
import { Nav, Navbar} from 'react-bootstrap';
import CategoriesMenu from "./CategoriesMenu";
import logo from '../../assets/ffxv-logo.png';
import './Navbar.scss';


export const NavBar = () => {
    return (
      <Navbar expand="lg">
         <Navbar.Brand>
         <Link to={`/`}>
            <img src={logo} alt="logo" />
         </Link>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <CategoriesMenu />
         </Navbar.Collapse>
         <Nav.Link to= {'/'}>Contacto</Nav.Link>
         <CartIcon/>
      </Navbar>
    );
};

