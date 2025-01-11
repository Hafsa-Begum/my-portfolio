import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import logo from '../../portfolio-imgs/image (3).png';
import './Header.css';

const Header = () => {
    return (

        <>
            <Navbar 
  collapseOnSelect 
  expand="lg" 
  style={{ backgroundColor: '#282c34' }} 
  variant="dark" 
  fixed="top"
>
  <Container>
    {/* Navbar Brand */}
    <Navbar.Brand href="#home">
      <img className="rounded-circle" src={logo} alt="Logo" />
    </Navbar.Brand>
    
    {/* Toggle Button for Mobile */}
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    
    {/* Collapsible Navbar Content */}
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end align-items-center">
      <Nav className="nav-menu">
        {/* Navigation Links */}
        <Nav.Link className="my-auto nav-item" as={NavHashLink} to="/home#home">Home</Nav.Link>
        <Nav.Link className="my-auto nav-item" as={NavHashLink} to="/home#about">About</Nav.Link>
        <Nav.Link className="my-auto nav-item" as={NavHashLink} to="/home#experience">Experience</Nav.Link>
        <Nav.Link className="my-auto nav-item" as={NavHashLink} to="/home#services">Services</Nav.Link>
        <Nav.Link className="my-auto nav-item" as={NavHashLink} to="/home#blogs">Blogs</Nav.Link>
        <Nav.Link className="my-auto nav-item" as={NavHashLink} to="/home#contactMe">Contact</Nav.Link>
        <Nav.Link className="my-auto nav-item" as={NavHashLink} to="/home#portfolio">Portfolio</Nav.Link>
        {/* Resume Button */}
        <div className="d-flex justify-content-center mt-3 w-100">
        <Nav.Link href="/Mst-Hafsa-Begum.pdf" target="_blank" download>
          <div className="regular-btn">
            <ul>
              <li>
                Resume
                <span></span><span></span><span></span><span></span>
              </li>
            </ul>
          </div>
        </Nav.Link>
      </div>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </>

    );
};

export default Header;