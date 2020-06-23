import React from "react"

const ProductItem = (props) => {
   return (
    <div>
        <div>{props.name}</div>
        <div>{props.price}</div>
        <img src={props.img} alt={props.name} />
        <div></div>
    </div>
   )
}

export default ProductItem