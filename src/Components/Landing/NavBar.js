import React from 'react'
import {Link} from 'react-router-dom'

export default class NavBar extends React.Component{
    render(){
        return(
            <div>
             <h1>Navigation Bar</h1>
             <Link to="/signup">Sign Up</Link>
            </div>
        )
    }
}