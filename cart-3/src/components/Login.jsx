import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            password : ''
        }
    }
    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        }) 
    }
    handleSubmit = e => {
        e.preventDefault()
        const { handlers } = this.props
        const {username, password} = this.state
        let payload = {
            username, password
        }
        // console.log(payload)
        handlers.checkValidUser(payload)
    }
    
    render() {
        const {username, password} = this.state
        const { handlers } = this.props
        console.log(handlers)
        if(handlers.isAuthenticated()){
            return <Redirect to='/' />
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} placeholder="username" name="username" value={username} type="text"/>
                <input onChange={this.handleChange} placeholder="password" name="password" value={password} type="password"/>
                <input type="submit" />
            </form>
        )
    }
}
