import React from "react"

const CartItem = (props) => {
   return (
    <div>
        <div>{props.name}</div>
        <div>{props.price}</div>
        <div>{props.quantity}</div>
        <img src={props.img} alt={props.name} />
    </div>
   )
}

export default CartItem  