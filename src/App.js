import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Carousele from "./components/styles/Carousel/Carousele";
import Footer from "./components/styles/Footer/Footer";
import Search from "./components/styles/Search/Search";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Search />
        <NavBar />
        <Carousele />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/item:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
