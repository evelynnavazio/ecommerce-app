import React from "react";
import { Card } from "react-bootstrap";

function Item({ items }) {
  return (
    <>
      {items.map(item =>
        <Card className="card-container col-md-2 mb-5">
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>${item.price}</Card.Text>
          </Card.Body>
        </Card>
     )
    }
    </>
  );
}

export default Item;
