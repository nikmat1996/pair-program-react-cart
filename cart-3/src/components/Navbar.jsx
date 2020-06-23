import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar (props){
    return(
        <div>
            <ul>
                <li>
                    <Link to= '/'>Home</Link>
                </li>
                <li>
                    <Link to= '/cart'>Home</Link>
                </li>
                <li>
                    <Link to= '/about' >Home</Link>
                </li>
                <li>
                    <Link to= '/login' >Home</Link>
                </li>
            </ul>
        </div>
    )
}