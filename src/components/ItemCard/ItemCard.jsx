import React from "react";
import { useCartContext } from "../../context/CartContext";

import { Card, Button } from "react-bootstrap";

function ItemCard({ item }) {
  const {removeItem} = useCartContext();

  console.log(item)

  return(
    <Card key={item.id}>
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>Nombre: {item.name}</Card.Title>
        <Card.Text>
          Descripcion: {item.description}
        </Card.Text>
     
        <Button type="button" className="btn" onClick={() => removeItem(item.id, item.quantity)}>X</Button>
      </Card.Body>
    </Card>
  ) 
}

export default ItemCard;
