import React from "react";
import "./Search.css";
import { Form, FormControl } from "react-bootstrap";

function Search() {
  return (
    <div className="search-container">
      <div className="search-logo"></div>
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
  );
}

export default Search;
