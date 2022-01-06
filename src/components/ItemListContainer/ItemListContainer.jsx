import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getData } from "../../Products";
import './ItemListContainer.css'

import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData.then((item) => setItems(item)).finally(() => setLoading(false));
  }, []);

  return loading ? (
    <Spinner animation="border" variant="warning">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <>

      <h3 className="item-list-container-titulo">{greeting}</h3>
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;
