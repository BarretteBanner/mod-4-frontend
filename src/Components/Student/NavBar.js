import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class NavBar extends Component {
    render() {
      console.log(this.props)
        return (
            <div className='navBar'>
              <header className='navBarHeader'>
                <img src="https://codetheweb.blog/assets/img/icon2.png" className='navBarImage' alt=''/>
                <nav>
                <ul className='navBarItems'>
                    <li><Link to={`/student/${this.props.studentID}/home`}> Home </Link> </li> 
                    <li><a href="http://www.google.com">Logout</a></li>
                    <li><Link to={`/student/${this.props.studentID}/catalog`}>Course Catalog</Link></li>
                </ul>
                </nav>
              </header>
            </div>
        )
    }
}

export default NavBar
