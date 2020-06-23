import React, { Component } from 'react'
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component= {Home} /> 
                <Route path='/cart'  component= {Cart} /> 

            </Switch>
        )
    }
}
