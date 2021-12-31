import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { data } from "../../Products";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { catId } = useParams();
  
  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = catId
          ? data.filter((item) => item.category === catId)
          : data;
        resolve(myData);
      }, 2000);
    });

    getItems
      .then((res) => {
        setItems(res);
      })
      .finally(() => setLoading(false));
  }, [catId]);

  return loading ? (
    <Spinner animation="border" variant="warning">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <>
      <h3 style={{ textAlign: "center" }}>{greeting}</h3>
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;
