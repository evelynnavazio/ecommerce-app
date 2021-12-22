import React from 'react'
import ItemList from '../ItemList/ItemList'



 function ItemListContainer(props) {
    return (
        <div>
           <p>{props.greeting} </p>
         
           <p>Ofertas</p>
             <ItemList/>
        </div>
    )
}

export default ItemListContainer