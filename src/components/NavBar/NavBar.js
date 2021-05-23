import React from 'react';
import './NavBar.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/ffxv-logo.png';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
   return (
      <Navbar expand="lg">
         <Navbar.Brand>
            <Link to='/'>
               <img src={logo} alt="logo" />
            </Link>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
               <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                        <Link to="/products/remera">Remeras</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                        <Link to="/products/accesorio">Accesorio</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                        <Link to="/products/poster">Posters</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                        <Link to="/products/figura">Figuras</Link>
                  </NavDropdown.Item>
               </NavDropdown>
               <Nav.Link to= {'/'}>Contacto</Nav.Link>
               <CartWidget/>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}
export default NavBar;
