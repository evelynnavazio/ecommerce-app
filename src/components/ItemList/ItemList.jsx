import React, { useEffect, useState } from "react";
import { loadItems } from "../../Products";
import Loader from "react-loader-spinner";
//--COMPONENTES--//
import Item from "../Item/Item";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    loadItems
    .then(items=>{setItems(items)})
    .catch(err=> console.log(err))
    .finally(()=> setIsLoading(false))
  }, []);

  return (
    <>
{isLoading ?
  <Loader type="TailSpin" color="#CCFF44" height={40} width={50} />
  :
  <Item items={items} />
 }

    </>
  );
};
export default ItemList;
