import React from 'react';
import './NavBar.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/img/ffxv-logo.png';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
   return (
      <Navbar expand="lg">
         <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
               <Nav.Link href="/">Inicio</Nav.Link>
               <Nav.Link href="/">Productos</Nav.Link>
               <Nav.Link href="/">Contacto</Nav.Link>
               <CartWidget/>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}
export default NavBar;
