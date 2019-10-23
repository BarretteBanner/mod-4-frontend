import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div className='navBar'>
              <header className='navBarHeader'>
                <img src="https://codetheweb.blog/assets/img/icon2.png" className='navBarImage'/>
                <nav>
                <ul className='navBarItems'>
                    <li><a href="#">Home</a></li> 
                    <li><a href="#">Logout</a></li>
                    <li><Link to={`/student/${this.props.studentID}/catalog`}>Course Catalog</Link></li>
                </ul>
                </nav>
              </header>
            </div>
        )
    }
}

export default NavBar
