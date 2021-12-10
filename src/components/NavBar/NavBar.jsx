import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import {Navbar, Container, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';

import './NavBar.css'

export default function NavBar() {
    return (
      <Navbar expand="lg" className='navbar-container'>
      <Container fluid>
        <Navbar.Brand className='navbar-logo'></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Form className="d-flex navbar-search">
              <FormControl
                type="search"
                placeholder="Buscar productos, marcas y más.."
                className="me-2"
                aria-label="Search"
              />
          </Form>

            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)}
