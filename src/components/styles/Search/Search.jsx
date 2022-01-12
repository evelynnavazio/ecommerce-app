import React from "react";
import { NavLink } from "react-router-dom";
import "./Search.css";
import logo_ml from "../../../images/logo_ml.png";
import { Form, FormControl } from "react-bootstrap";

function Search() {
  return (
    <>
      <div className="search-container">
        <div className="search-logo">
        
            <NavLink as={NavLink} to="/" exact="true" className='nav.link'>
              <img src={logo_ml} className="search-logo" alt="logo" />
            </NavLink>
      
        </div>
        <div>
          <Form className=" search-search">
            <FormControl
              type="search"
              placeholder="Buscar productos, marcas y más.."
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </div>
        <div className="search-point"></div>
      </div>
    </>
  );
}

export default Search;
