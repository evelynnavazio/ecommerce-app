import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ name, id, category, image, price }) {
  return (
    <>
      <Card className="card-container">
        <Link to={`/product/${id}`}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title className="item-title-price">${price}</Card.Title>
            <Card.Text>{name} </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </>
  );
}

export default Item;
