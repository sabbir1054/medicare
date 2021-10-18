import React from "react";
import {  Container, Nav, Navbar } from "react-bootstrap";
import './Header.css'
const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <h3 className="display-5 fw-normal logo">Medi<span className='brand-color'>Care</span> </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" mx-md-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Doctors</Nav.Link>
              <Nav.Link href="#link">Services</Nav.Link>
              <Nav.Link href="#link">Appointment</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
            <div className="d-flex justify-content-space-evenly">
              <button className="btn button mx-1">
                <i class="fas fa-sign-in-alt"></i> Login
              </button>
              <h6 className="pt-2">name</h6>
              <button className="btn button mx-1">
                <i class="fas fa-sign-out-alt"></i> Log Out
              </button>
              <button className="btn fill-btn mx-1">
                <i class="fas fa-user-plus"></i> Register
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
