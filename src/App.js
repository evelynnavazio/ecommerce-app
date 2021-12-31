import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Search from "./components/styles/Search/Search";
import NavBar from "./components/NavBar/NavBar";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/styles/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <Search />
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'HOME'} />} />
          <Route path="/item/:catId" element={<ItemListContainer greeting={'FILTRADO'} />} />
          <Route path="/product/:itemId" element={<ItemDetailContainer/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
