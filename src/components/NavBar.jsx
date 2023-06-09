import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">MDF</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Mochilas</Nav.Link>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Mochilas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Bolsos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Morrales</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                        Accesorios
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <CartWidget />
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </nav>
    )
}

export default NavBar
