import React from 'react'
import StudentAllCalendar from './StudentAllCalendar'
import ClassCollection from './ClassCollection'
import NavBar from '../Student/NavBar'
import '../../css/studentHomePage.css'

export default class StudentHome extends React.Component{
    render(){
        return(
            <div>
                <NavBar studentID={this.props.match.params.id}/>
                <ClassCollection studentID={this.props.match.params.id}/>
                <StudentAllCalendar/>
            </div>
        )
    }
}