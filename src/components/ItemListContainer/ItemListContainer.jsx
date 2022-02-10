import React, { useEffect, useState } from "react";
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import db from './firebase/firebase';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';

export const ItemListContainer = ({ greeting }) => {

  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  const { catId } = useParams();

  useEffect(async () => {
    setLoader(true);

    const myItems = catId ?
      query(collection(db, 'products'), where('type', '==', catId))
      /* query(collection(db, 'products'), where('category', '==', categoryId), orderBy("name")) */
      :
      collection(db, 'products');

    try {
      const querySnapshot = await getDocs(myItems)

      console.log(querySnapshot.docs)

      setItems(querySnapshot.docs.map(el => {
        return { ...el.data(), id: el.id }
      }))
    }
    catch {
      console.log("SE ROMPIO")
    }
  
    setLoader(false)

  }, [catId]);

  return loader ? (
    <h2>CARGANDO...</h2>
  ) : (
    <>
      <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
      <ItemList items={items} />
    </>
  );
};
