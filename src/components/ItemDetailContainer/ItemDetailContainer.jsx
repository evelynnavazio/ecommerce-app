import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../Products";
import TailSpin from "react-loader-spinner";
import { Container } from "react-bootstrap";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer({ greeting }) {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const { catId } = useParams();

  useEffect(() => {
    document.title = "Detalle del producto";
  }, []);

  useEffect(() => {
    getData
      .then((item) => {
        if (catId) {
          const myData = item.filter((e) => e.id === catId);
          setItem(myData);
        } else {
          setItem(item);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [catId]);

  return (
    <>
      <h3 className="item-detail-container-titulo">{greeting}</h3>
      {loading ? (
        <TailSpin>Cargando...</TailSpin>
      ) : (
        <Container className="item-detail-container">
          <ItemDetail item={item} />
        </Container>
      )}
    </>
  );
}

export default ItemDetailContainer;
