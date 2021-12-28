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
      <Search />
      <NavBar />
      <Carousele />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
        </Routes>
        <ItemDetailContainer />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
