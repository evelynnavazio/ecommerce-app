import { createContext, useContext, useState } from "react";


export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = ({ item }) => {
    if (!cart.includes(item)) {
      return setCart({ ...cart, item });
    } else {
      return false;
    }
  };

  const removeItem = (id) => {
      const remove = cart.filter ( i => i.id !== id)
      setCart(remove)
  };

  const emptyCart = () => {
      setCart([])
  };

  const isInCart = (prod) => cart.some(product => product.id === prod.id);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, emptyCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
