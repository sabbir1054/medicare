import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink to="/" className="text-decoration-none text-dark">
            <h3 className="display-5 fw-normal logo">
              Medi<span className="brand-color">Care</span>{" "}
            </h3>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" mx-md-auto fw-bold logo">
              <NavLink
                to="/home"
                className="text-decoration-none mx-2 text-secondary"
              >
                Home
              </NavLink>
              <NavLink
                to="/doctors"
                className="text-decoration-none mx-2 text-secondary"
              >
                Doctors
              </NavLink>
              <NavHashLink
                to="/home/#services"
                className="text-decoration-none mx-2 text-secondary"
              >
                Services
              </NavHashLink>
              <NavLink
                to="/appointment"
                className="text-decoration-none mx-2 text-secondary"
              >
                Appointment
              </NavLink>
              <NavLink
                to="/about"
                className="text-decoration-none mx-2 text-secondary"
              >
                About
              </NavLink>
            </Nav>
            <div className="d-md-flex justify-content-space-evenly">
              <h6 className="pt-2">{user.displayName}</h6>
              {user.email ? (
                <NavLink to="/home">
                  <button className="btn button mx-1" onClick={logOut}>
                    <i className="fas fa-sign-in-alt"></i> Log Out
                  </button>
                </NavLink>
              ) : (
                <div>
                  <NavLink to="/login">
                    <button className="btn fill-btn mx-1">
                      <i className="fas  fa-sign-in-alt"></i> Login
                    </button>
                  </NavLink>
                  <NavLink to="/register">
                    <button className="btn fill-btn mx-1">
                      <i className="fas fa-user-plus"></i> Register
                    </button>
                  </NavLink>
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
