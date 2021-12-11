import React,{useState} from 'react'
import './ItemCount.css'

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);

    const add = () => {
    if(stock > 0 && (count < stock)){
        setCount(count + 1);
    }
};
    const rest = () => {
        if (count > 1){
            setCount(count - 1 )
        }
    }

    const itemToCart = (onAdd) => {
        alert(`compraste ` + 
            count + ` articulos`)
    }
    return (
    <>
        <div className='container-item-count'>
           <button onClick={rest}><i className="fas fa-minus"></i></button> 
                <p>{count}</p>
           <button onClick={add}><i className="fas fa-plus"></i></button> 
        </div>
        <button type="button"  onClick={itemToCart} className='item-count-button'>Añadir al carrito</button>
    </>
    )
}

export default ItemCount