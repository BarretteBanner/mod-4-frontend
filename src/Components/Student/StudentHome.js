import React from 'react'
import StudentAllCalendar from './StudentAllCalendar'
import ClassCollection from './ClassCollection'
import NavBar from '../Student/NavBar'
import '../../css/studentHomePage.css'

export default class StudentHome extends React.Component{

    state = {
        courses: [],
        failSafe: false
    }

    getStudentsCourses = (courses) => {
        courses.forEach(course => {
            if(course.student_ids.includes(this.props.match.params.id)) {
                this.setState({courses: this.state.courses.concat(course)})
            }
        })
    }

    componentDidMount() {
        fetch('http://localhost:3000/courses')
        .then(resp => resp.json())
        .then(courses => this.getStudentsCourses(courses))
    }

    render(){
        return(
            <div>
                <NavBar studentID={this.props.match.params.id}/>
                <ClassCollection studentID={this.props.match.params.id} courses={this.state.courses}/>
                <StudentAllCalendar/>
            </div>
        )
    }
}