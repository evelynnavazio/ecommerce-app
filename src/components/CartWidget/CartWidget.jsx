import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./CartWidget.css";
import { useCartContext } from '../../context/CartContext';

export default function CartWidget() {
    const {cart} = useCartContext();
  return (
    <Link to="/Cart" className="link-cart-widget">
      <div className="icons">
        <i className="fas fa-shopping-cart icon-cartwidget">
        {cart.length > 0 && <span>{cart.length}</span>}
        </i>
      </div>
    </Link>
  );
}
