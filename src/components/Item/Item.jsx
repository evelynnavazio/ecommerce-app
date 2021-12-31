import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item({ name, id, category, image, price }) {
  return (
    <>
      <Link to={`/product/${id}`}>

        <Card className="card-container col-md-2 mb-5">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>${price}</Card.Text>
          </Card.Body>
        </Card>
        
      </Link>
    </>
  );
}

export default Item;
