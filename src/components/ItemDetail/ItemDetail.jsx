import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Card } from "react-bootstrap";

function ItemDetail({ item }) {
  const [itemsToCart, setItemsToCart] = useState(true);

  const onAdd = (count) => {
    alert(`Se agregaron ${count} productos correctamente`);
    setItemsToCart(false);
  };

  return (
    <>
      {item.map((item) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>${item.price}</Card.Text>
            <Card.Text>Stock: {item.stock}</Card.Text>
            {itemsToCart ? (
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            ) : (
              <>
              <Link to={'/cart'} action="Ir al Carrito" className="btn btn-primary">
                Ir al carrito
              </Link>
              <Link to={'/'} action="Ir al home" className="btn btn-primary">
                Seguir comprando
              </Link>
              </>
            )}
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default ItemDetail;
