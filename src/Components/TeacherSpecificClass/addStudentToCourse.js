import React, { Component } from 'react'
import { Button, Form} from 'semantic-ui-react'
import { Redirect } from 'react-router'


export class addStudentToCourse extends Component {

    state = {
        pendingStudents: []
    }

    componentDidMount() {
        fetch(`http://localhost:3000/courses/${this.props.match.params.id2}`)
        .then(resp => resp.json())
        .then(course => this.getPendingStudentIDs(course))

        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(users => this.matchStudents(users))
    }

    getPendingStudentIDs = (course) => {
        this.setState({pendingStudents: this.state.pendingStudents.concat(course.pending_student_ids)})
    }

    matchStudents = (users) => {
        console.log(users)
    }


    render() {
        console.log(this.state.pendingStudents)
        return (
            <div>
             <h1>List of pending students to be accepted into the course</h1>
            </div>
        )
    }
}

export default addStudentToCourse
