import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class NavBarTeacher extends Component {
    render() {
        return (
            <div className='navBar'>
            <header className='navBarHeader'>
              <img src="https://codetheweb.blog/assets/img/icon2.png" className='navBarImage' alt=''/>
              <nav>
              <ul className='navBarItems'>
                  <li><Link to={`/teacher/${this.props.teacherID}/home`}>Home</Link></li>
                  <li><Link to={`/teacher/${this.props.teacherID}/create_course`}>Create Course</Link></li>
              </ul>
              </nav>
            </header>
          </div>
        )
    }
}

export default NavBarTeacher
