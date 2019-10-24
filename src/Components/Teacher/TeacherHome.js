import React from 'react'
import TeacherClassCollection from './TeacherClassCollection'
import TeacherAllCalendar from './TeacherAllCalendar'
import NavBarTeacher from './NavBarTeacher'
export default class TeacherHome extends React.Component{

    state = {
        teacherID: this.props.match.params.id,
        courses: []
    }

    getTeacherCourses(courses) {
        let teacherCourses = []
        courses.forEach(course => {
        if (course.user_id === parseInt(this.state.teacherID)) {
                teacherCourses.push(course)
        }
    })
    this.setState({courses: teacherCourses})
}

    componentDidMount() {
        fetch('http://localhost:3000/courses')
        .then(resp => resp.json())
        .then(courses => this.getTeacherCourses(courses))
    }

    render(){
        return(
            <div>
                <NavBarTeacher teacherID={this.state.teacherID}/>
                <TeacherClassCollection teacherID={this.state.teacherID} courses={this.state.courses}/> 
                <TeacherAllCalendar/>
            </div>
        )
    }
}