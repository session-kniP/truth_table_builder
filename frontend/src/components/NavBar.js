import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../styles/navbar.css';

export const NavBar = () => {
    return (
        <Navbar bg="light" expand="md" className="justify-content-lg-center">
            <Navbar.Brand href="/"><h2>TTB</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="col-md-6">
                <Nav className="">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/builder">Builder</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    );
};
