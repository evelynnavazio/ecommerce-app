import React, { useEffect, useState } from "react";
import Products from '../../Products.json'
import Loader from "react-loader-spinner";
//--COMPONENTES--//
import Item from "../Item/Item";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadItems = async () => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(Products);
      }, 2 * 1000);
    });
console.log(response)
    return response;
  };

  useEffect(() => {
    const getItems = async () => {
      setIsLoading(true);
      const result = await loadItems();

      setIsLoading(false);
      setItems(result);
    };
    getItems();
  }, []);


  return (
    <>
      {items.map(item => {
        return <Item key={item.id} item={item} name={item.name} image={item.image} price={item.price} />;
      })}
      {isLoading && (
        <Loader type="TailSpin" color="#CCFF44" height={40} width={40} />
      )}
    </>
  );
};
export default ItemList;
