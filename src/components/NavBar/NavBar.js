import React from 'react';
import './NavBar.scss';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/ffxv-logo.png';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
   return (
      <Navbar expand="lg">
         <Navbar.Brand>
            <Link to="/">
               <img src={logo} alt="logo" />
            </Link>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
               <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <Link to={'/category/remera'}>
                        <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
                  </Link>
                  <Link to={'/category/accesorio'}>
                        <NavDropdown.Item href="#action/3.2">Acessorios</NavDropdown.Item>
                  </Link>
                  <Link to={'/category/poster'}>
                        <NavDropdown.Item href="#action/3.3">Posters</NavDropdown.Item>
                  </Link>
                  <Link to={'/category/figura'}>
                        <NavDropdown.Item href="#action/3.4">Figuras</NavDropdown.Item>
                  </Link> 
               </NavDropdown>
               <Nav.Link to= {`/`}>Contacto</Nav.Link>
               <CartWidget/>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}
export default NavBar;
