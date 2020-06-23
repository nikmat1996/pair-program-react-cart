import React, { Component } from 'react'
// import data from '../Utils/data.json'
import Navbar from './Navbar'
import Routes from './Routes'

export default class Application extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            cartItems: [],
            isAuth: false,
            users: [
                    {
                        username: "nikhil",
                        password : "nikhil"
                    },
                ]
        }
    }
    isAuthenticated = () => {
        if(this.state.isAuth)
            return true
        else
            return false
    }

    checkValidUser = ({username, password}) =>{
        let flag = false
        
        this.state.users.forEach(item => {
                if(item.username === username && item.password === password)
                    flag = true
                })
        this.setState({
            isAuth: true
        })
        if(flag){
            alert("valid user")
        }
        return flag
    }
    
    handleAddToCart = (payload) => {
        let cart = [...this.state.cartItems]
        let id = payload.id
        let item = {...payload, quantity: 1}
        let duplicate = false

        if(!this.isAuthenticated){
            alert("please login")
        }
        for(var i = 0 ; i < cart.length ; i++){
            if(cart[i].id === Number(id)){
                duplicate = true
                cart[i].quantity++
                this.setState({
                    cartItems: cart
                })
                break
            }
        }
        if(!duplicate){
            this.setState({
                cartItems: [...cart,item]
            })
        }
    }
    getCartItems = () => this.state.cartItems
    
    render() {
        let handlers = {
            addToCart : this.handleAddToCart,
            getCartItems: this.getCartItems,
            checkValidUser: this.checkValidUser,
            isAuthenticated: this.isAuthenticated
        }
        return (
            <div>
                <Navbar />
                <Routes handlers={handlers}/>
            </div>
        )
    }
}
