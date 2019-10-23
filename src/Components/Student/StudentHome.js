import React from 'react'
import StudentAllCalendar from './StudentAllCalendar'
import ClassCollection from './ClassCollection'
import NavBar from '../Landing/NavBar'
import '../../css/studentHomePage.css'
export default class StudentHome extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <ClassCollection/>
                <StudentAllCalendar/>
            </div>
        )
    }
}