import React from 'react';

// import Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";

import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

import classes from "./Header.module.css"

const Header: React.FC = () => {
  return (
    <Navbar className={classes.headerWrapper} bg="dark" variant="dark" expand="md" sticky="top">
        <Container fluid="md">
        <Navbar.Brand>Communities</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link className={classes.link}>
            <FaSignInAlt />
            Log in
          </Nav.Link>
          <Nav.Link>
            <FaUserPlus />
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default Header;