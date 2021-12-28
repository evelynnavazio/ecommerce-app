import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar-container-color">
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Supermercado</Nav.Link>
            <Nav.Link href="#action2">Ofertas</Nav.Link>
            <Nav.Link href="#action2">Moda</Nav.Link>
            <Nav.Link href="#action2">Ayuda</Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Categorias</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
