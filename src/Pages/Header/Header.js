import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import logo from '../../portfolio-imgs/image (1).png'

const Header = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home"><img className='rounded-circle' src={logo} alt="" /></Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav >
                        <Nav.Link as={NavHashLink} to="#home">Home</Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#about">About</Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#contactMe">Contact Me</Nav.Link>
                        <Nav.Link as={NavHashLink} to="/home#portfolio">Portfolio</Nav.Link>
                        {/* <Nav.Link href="https://drive.google.com/file/d/1WOwOfTq6aC-nWQnE00rt-zHHQAgjlenS/view?usp=sharing" download>Download Resume</Nav.Link> */}
                        <Nav.Link href="/Hafsa-resume.pdf" target="_blank" download>Download Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>

    );
};

export default Header;