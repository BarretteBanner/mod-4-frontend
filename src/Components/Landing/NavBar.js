import React from 'react'

export default class NavBar extends React.Component{
    render(){
        return(
            <div>
             <h1>Navigation Bar</h1>
             <button
             onClick={() => this.props.changePage("signup")}
             >Sign-Up</button>
             <button>Login</button>
            </div>
        )
    }
}