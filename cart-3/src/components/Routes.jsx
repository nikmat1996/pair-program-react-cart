import React from 'react'
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";

export default function Routes(props) {
        const { handlers } = props
        // console.log(handlers)
        return (
            <Switch>
                <Route path='/' exact render={(props) => <Home {...props} handlers= {handlers} />}  /> 
                <Route path='/cart'  render={(props) => <Cart {...props} handlers= {handlers} />} /> 
                <Route path='/login' render={(props) => <Login {...props} handlers= {handlers} />} /> 
            </Switch>
        )
}
