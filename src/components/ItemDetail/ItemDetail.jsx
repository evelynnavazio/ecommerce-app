import React from "react";
import "./ItemDetail.css";
import { Container, Card, Button } from "react-bootstrap";

function ItemDetail({item}) {
  console.log(item)
  return (
    <>
      {item.map(item=>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.id}
          {item.price}
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
        )
      }
    </>
  );
}

export default ItemDetail;

