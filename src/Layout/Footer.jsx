import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-bottom">
      <Container fluid>
        <Navbar.Brand>&copy; 2024 WebSkiter Academy</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
