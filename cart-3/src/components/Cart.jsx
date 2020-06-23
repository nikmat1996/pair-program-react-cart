import React from 'react'
import CartItem from "./CartItem";
import { Redirect } from 'react-router-dom';

export default function Cart(props) {
    const { handlers }  = props
    // console.log(props)
    const cartItems = handlers.getCartItems()
    console.log(handlers)
    const  isAuthenticated = handlers.isAuthenticated()
    if(isAuthenticated){
        return <Redirect to='/login' />
    }
    return (
        <div>
            CART ITEMS

            {cartItems && cartItems.map(item => <CartItem key = {item.id} {...item} />)}
        </div>
    )
}
