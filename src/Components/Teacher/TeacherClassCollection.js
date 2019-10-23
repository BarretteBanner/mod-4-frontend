import React from 'react'
import TeacherClassCard from './TeacherClassCards'
import '../../css/teacherHomePage.css'
export default class TeacherClassCollection extends React.Component{

    state = {
        courses: []
    }

    getTeacherCourses(courses) {
        let teacherCourses = []
        courses.map(course => {
            if (course.user_id === parseInt(this.props.teacherID)) {
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
        console.log(this.state.courses)
        return(
            <div className='classPageStudent'>
                <div className='classCollectionStudent'>
                {this.state.courses.map(course => {
                    return <TeacherClassCard course = {course} key={course.id} teacherID = {this.props.teacherID}/>
                })}
                </div>
            </div>
        )
    }
}