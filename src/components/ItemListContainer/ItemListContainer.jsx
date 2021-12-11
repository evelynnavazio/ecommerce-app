import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

 function ItemListContainer(props) {
    return (
        <div>
           <p>{props.greeting} </p> 
           
           <ItemCount  stock={5} initial={1} />
        </div>
    )
}

export default ItemListContainer