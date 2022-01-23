import "./Cart.css";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext";
import ItemCard from "../ItemCard/ItemCard";

function Cart() {
  const { cart, cartEmpty } = useCartContext();

  return (
    <Container className="cart-container">
      <div>
        {cart.length ? (
          cart.map((item) => <ItemCard item={item} key={item.id} />)
        ) : (
          <>
            <p>"esta vacio"</p>
            {cart.length ? (
              <button className="btn" onClick={() => cartEmpty()}>
                vaciar carrito
              </button>
            ) : (
              <Link to={'/'} action="Ir al home" className="btn btn-primary">
              Seguir comprando
            </Link>
            )}
          </>
        )}
        <Button>Terminar compra</Button>
      </div>
    </Container>
  );
}

export default Cart;
