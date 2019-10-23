import React from 'react'
import "../../css/courseCatalog.css";

export default class CourseForList extends React.Component{
    state ={
        teacher: ''
    }

    getTeacher = (users) => {
        users.map(user => {
            if(user.id === this.props.course.user_id) {
                this.setState({
                    teacher: user.name
                })
            }
        })
    }

    componentDidMount() {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(users => this.getTeacher(users))
    }
    render(){
        if(this.state.teacher === '') {
            return <div><h1>Loading...</h1></div>
        } else {
        return(
            <div className="course">
                <h1>Course Name: {this.props.course.name}</h1>
                <p>Subject: {this.props.course.subject}</p>
                <p>Teacher: {this.state.teacher}</p>
                <button>Request</button>
            </div>
        )}
    }
}