import React from "react";
import { Container, Row } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  return (
    <Container className="mt-5">
      <Row>
        <ItemList />
      </Row>
    </Container>
  );
}

export default ItemListContainer;
