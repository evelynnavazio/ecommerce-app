import React, { useContext } from "react";
import "./Cart.css";
import { Container } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import ItemCard from "../ItemCard/ItemCard";

function Cart() {
  const { cart, removeItem, emptyCart, isInCart } = useCartContext();

  return (
    <Container className="cart-container">
      {cart.length ? <div>algo</div> : ""}
      <div>
        {cart.length ? 
          cart.map(prod => 
          <ItemCard item={prod} key={prod.id} />
          )
         : 
          <p>"esta vacio"</p>
        }
      </div>
      <div></div>
    </Container>
  );
}

export default Cart;
