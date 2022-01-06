import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Search from "./components/styles/Search/Search";
import NavBar from "./components/NavBar/NavBar";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/styles/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
//import PaymentData from "./components/styles/PaymentData/PaymentData";
import Carousele from "./components/styles/Carousel/Carousele";

function App() {
  return (
    <>
      <Search />
      <NavBar />
      <Carousele/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Supermercado'} />} />
          <Route path="/product/:catId" element={<ItemDetailContainer greeting={'FILTRADO'} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
