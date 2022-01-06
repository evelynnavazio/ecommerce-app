import React from "react";
import  Item from "../Item/Item";
import './ItemList.css'


function ItemList({ items }) {
  return (
    <>
     
      <section className="container-item-list">
        {items?.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </section>
      ;
    </>
  );
}

export default ItemList;
