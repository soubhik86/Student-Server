import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import { profilePic } from '../api/Endpoint';

export const Header = () => {
  const user = localStorage.getItem("name");
  const proImg = localStorage.getItem("proimg");
  const token = localStorage.getItem("token");

  return (
    <div className="header-container">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">WTS STUDENT SERVER</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>
            {token && (
                <>
                  <Nav.Link href="/">Product List</Nav.Link>
                  <Nav.Link>{user}</Nav.Link>
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      objectFit: "cover",
                    }}
                    src={proImg ? profilePic(proImg) : "error"}
                    alt="Profile"
                    className="profile-img"
                  />
                  <NavDropdown title="Profile" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">
                      Profile Info
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" >
                      Log Out
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
          </Nav>
          <Form className="d-flex"></Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
};
