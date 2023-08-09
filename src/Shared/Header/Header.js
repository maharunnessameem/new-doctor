import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../images/doc-logo.png';
import './Header.css'

const Header = () => {
    // const [user] = useAuthState(auth);

    // const handleSignOut = () => {
    //     signOut(auth);
    // }
    return (
        <>
            <Navbar className='header' collapseOnSelect expand="lg" sticky='top' bg="" variant="dark" >
                <Container>
                    {/* <Navbar.Brand as={Link} to="/">
                        <img height={100} src={logo} alt="" />
                    </Navbar.Brand> */}
                    <Nav.Link as={Link} to="/">DR. MD OMAR FARUK</Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            {/* <Nav.Link href="home#experts">Experts</Nav.Link> */}
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        {/* <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;