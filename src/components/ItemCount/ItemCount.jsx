import React, { useState } from "react";
import "./ItemCount.css";
import { Button } from 'react-bootstrap'

function ItemCount({ stock, initial, onAdd}) {
  const [counter, setCounter] = useState(initial);

  const addToCart = () =>{
    onAdd(counter)

  }

  const add = () => {
    if (stock > 0 && counter < stock) {
      setCounter(counter + 1);
    }
  };
  const rest = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="container-item-count">
        <button onClick={rest}>
          <i className="fas fa-minus"></i>
        </button>
        <p>{counter}</p>
        <button onClick={add}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <Button className="btn" type="button" onClick={addToCart}>Agregar al Carrito</Button>

    </>
  );
}

export default ItemCount;
