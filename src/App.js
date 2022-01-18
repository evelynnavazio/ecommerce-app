import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./components/styles/Search/Search";
import NavBar from "./components/NavBar/NavBar";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/styles/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
//import PaymentData from "./components/styles/PaymentData/PaymentData";
import Carousele from "./components/styles/Carousel/Carousele";
import Cart from "./components/Cart/Cart";
import { CartProvider} from "./context/CartContext.jsx"


function App() {
  return (
   
<CartProvider>
      <BrowserRouter>
        <Search />
        <NavBar />
        <Carousele />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Supermercado"} />}
          />
          <Route
            path="/product/:catId"
            element={<ItemDetailContainer greeting={"Detalle del producto"} />}
          />
          <Route path="/cart" element={<Cart />} greeting={"Carrito"} />
        </Routes>
        <Footer />
      </BrowserRouter>
</CartProvider>

  );
}

export default App;
