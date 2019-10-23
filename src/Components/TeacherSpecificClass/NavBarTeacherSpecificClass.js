import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class NavBarTeacherSpecificClass extends Component {
    render() {
        return (
           <div className='navBar'>
              <header className='navBarHeader'>
                <img src="https://codetheweb.blog/assets/img/icon2.png" className='navBarImage'/>
                <nav>
                <ul className='navBarItems'>
                    <li><Link to={`/teacher/${this.props.teacherID}/class/${this.props.courseID}/add_assignment`}>Add Assignments</Link></li>
                    <li><a href="#">Add Grades</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </nav>
              </header>
            </div>
        )
    }
}

export default NavBarTeacherSpecificClass
