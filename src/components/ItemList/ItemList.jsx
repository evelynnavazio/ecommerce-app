import React from "react";
import  Item from "../Item/Item";

function ItemList({ items }) {
  return (
    <>
      <section>
        {items?.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </section>
      ;
    </>
  );
}

export default ItemList;
