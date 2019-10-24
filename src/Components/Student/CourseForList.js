import React from 'react'
import "../../css/courseCatalog.css";
import { Button, Form } from 'semantic-ui-react'
export default class CourseForList extends React.Component{
    state ={
        teacher: '',
        disabled: false,
        pending_student_ids: []
    }

    getTeacher = (users) => {
        users.forEach(user => {
            if(user.id === this.props.course.user_id) {
                this.setState({
                    teacher: user.name
                })
            }
        })
    }

    handleClick = () => {
        this.setState({disabled: true})
        fetch(`http://localhost:3000/courses/${this.props.course.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                pending_student_ids: [...this.state.pending_student_ids, this.props.studentID]
            })
        })
    }

    componentDidMount() {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(users => this.getTeacher(users))

        fetch(`http://localhost:3000/courses/${this.props.course.id}`)
        .then(resp => resp.json())
        .then(course => this.setState({pending_student_ids: course.pending_student_ids}))
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
                <Form>
                  <Button onClick={this.handleClick} disabled={this.state.disabled}>Request To Join</Button>  
                </Form>
            </div>
        )}
    }
}