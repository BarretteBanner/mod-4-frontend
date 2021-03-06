import React from 'react'
import {Link} from 'react-router-dom'
export default class NavBar extends React.Component{
    render(){
        return(
            <div className='navBar'>
              <header className='navBarHeader'>
                <img src="https://codetheweb.blog/assets/img/icon2.png" className='navBarImage' alt=''/>
                <nav>
                <ul className='navBarItems'>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                </nav>
              </header>
            </div>
        )
    }
}