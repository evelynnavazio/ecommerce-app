import React from "react";
import "./ItemDetail.css";
import { Container } from "react-bootstrap";

function ItemDetail({item}) {
  return (
    <Container>
      <p>{item.name}</p>
      <p>{item.id}</p>
      <p>{item.price} </p>
    </Container>
  );
}

export default ItemDetail;
