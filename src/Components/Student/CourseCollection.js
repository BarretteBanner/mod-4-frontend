import React from 'react'
import CourseForList from './CourseForList'
import "../../css/courseCatalog.css";

export default class CourseCollection extends React.Component{
    state = {
        courses: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/courses')
        .then(resp => resp.json())
        .then(allCourses => this.setState({courses: allCourses}))
    }

    render(){
        if (this.state.courses === []){
            return <h1>Loading...</h1>
        }
        return(
            <div className="courseCollection">
                    {this.state.courses.map(course => {
                    return <CourseForList course = {course} key={course.id}/>
                    })}
            </div>
            
        )
    }
}