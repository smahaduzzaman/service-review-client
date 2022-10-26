import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand to="#home"><Link to="/">ProTech Edu</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto text-white">
                        <Link to="/">Home</Link>
                        <Link className='mx-3' to="/course">Course</Link>
                        <Link to="/blog">Blog</Link>
                        <Link className='mx-3' to="/category">Category</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link to="/login">Login</Nav.Link>
                        <Nav.Link eventKey={2} to="/register">
                            Register
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none' Collapse="sm" >
                        <Sidebar></Sidebar>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;