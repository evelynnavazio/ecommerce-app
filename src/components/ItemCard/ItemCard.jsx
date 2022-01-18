import React from "react";
import { useCartContext } from "../../context/CartContext";

import { Card, Button  } from "react-bootstrap";

function ItemCard({ name, id, category, image, price }) {

  const {removeItem} = useCartContext();




<Card>
  <Card.Header></Card.Header>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
}

export default ItemCard;
