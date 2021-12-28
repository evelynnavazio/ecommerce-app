import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "../../Products.json";

import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const loadItems = async () => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(Products);
      }, 2000);
    });
    console.log(loadItems);
    return response;
  };

  useEffect(() => {
    loadItems
      .then((item) => {
        if (id) {
          const idProduct = item.filter((e) => e.id === id);
          setItem(idProduct);
        } else {
          setItem(item);
        }
      })
      .catch((err) => console.log(err));
  }, [id,loadItems]);

  return (
    <>
      <ItemDetail
        key={item.id}
        item={item}
        name={item.name}
        image={item.image}
        price={item.price}
      />
    </>
  );
}

export default ItemDetailContainer;
