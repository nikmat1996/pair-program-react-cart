import React from "react"

const ProductItem = (props) => {
   return (
    <div>
        <div>{props.name}</div>
        <div>{props.price}</div>
        <img src={props.img} alt={props.name} />
        <button onClick={()=>props.handleClick(props.id)}>Add to Cart</button>
    </div>
   )
}

export default ProductItem  