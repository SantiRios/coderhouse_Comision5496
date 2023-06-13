import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">MDF</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
                    <Nav.Link><Link to="/products">Productos</Link></Nav.Link>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to="/categories/mochilas">Mochilas</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/categories/bolsos">Bolsos</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/categories/morrales">Morrales</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/categories/accesorios">Accesorios</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/categories">Todas</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <CartWidget />
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
