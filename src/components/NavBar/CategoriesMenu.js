import React from 'react';
import { Nav, NavDropdown, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom'

function CategoriesMenu() {

    return (
        <Nav>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item>
                    <Link to={`/categories/remera`}>Remeras</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link to={`/categories/accesorio`}>Accesorio</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link to={`/categories/poster`}>Posters</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link to={`/categories/figura`}>Figuras</Link>
                </NavDropdown.Item>
                <Dropdown.Divider />
                <NavDropdown.Item>
                    <Link to={`/`}>Todos</Link>
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
}

export default CategoriesMenu;


