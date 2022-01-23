import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Card } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";


function ItemDetail({ item }) {
  const [itemsToCart, setItemsToCart] = useState(true);

  const { addItem } = useCartContext();

  const onAdd = (counter) => {
    alert(`Se agregaron ${counter} productos correctamente`);
    setItemsToCart(false);
    addItem({item: item[0], count: counter})
  };

  return (
    <>
      {item.map((item) => (
        <Card style={{ width: "18rem" }} key={item.id}>
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
