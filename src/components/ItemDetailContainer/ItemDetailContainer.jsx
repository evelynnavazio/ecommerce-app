import React, { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";
import { getDetail } from "../../Products";
//import Loader from "react-loader-spinner";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getDetail.then((item) => setItem(item));
  }, []);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
}

export default ItemDetailContainer;
