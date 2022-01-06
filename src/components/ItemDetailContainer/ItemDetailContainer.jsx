import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../Products";
//import Loader from "react-loader-spinner";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer({ greeting }) {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const { catId } = useParams();
  
  useEffect(() => {
      getData
      .then((item)=>{
        if(catId){
          const myData = item.filter((e)=> e.id === catId)
          setItem(myData)
        }else{
          setItem(item)
        }
      })
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
  }, [catId]);

  return (
    <>
      <h3 style={{ textAlign: "center" }}>{greeting}</h3>
      { loading ? <h2>Cargando...</h2> : <ItemDetail item={item} />}
    </>
  );
}

export default ItemDetailContainer;
