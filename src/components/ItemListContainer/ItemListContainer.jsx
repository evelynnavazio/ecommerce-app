import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { getData } from "../../Products";
import './ItemListContainer.css'

import ItemList from "../ItemList/ItemList";
import Carousele from "../styles/Carousel/Carousele"

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Mercado Libre"
 }, []);

  useEffect(() => {
    getData.then((item) => setItems(item)).finally(() => setLoading(false));
  }, []);
  

  return loading ? (
    <Loader></Loader>
  ) : (
    <>
         <Carousele />
      <h3 className="item-list-container-titulo">{greeting}</h3>
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;
