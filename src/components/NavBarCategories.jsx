import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBarCategories = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link><Link to="/categories/mochilas">Mochilas</Link></Nav.Link>
                <Nav.Link><Link to="/categories/bolsos">Bolsos</Link></Nav.Link>
                <Nav.Link><Link to="/categories/morrales">Morrales</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBarCategories