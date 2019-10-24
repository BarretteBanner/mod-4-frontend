import React, { Component } from 'react'
import { Button, Form} from 'semantic-ui-react'
import { Redirect } from 'react-router'


export class addStudentToCourse extends Component {

    state = {
        pendingStudentIDs: [],
        users: [],
        students: [],
        enrolledStudentIDs: [],
        readyToLoad: false
    }

    componentDidMount() {
        this.getPending()
        this.getPotential()
        this.getEnrolled()
    }

    componentDidUpdate(){
        if (this.state.students.length === 0){ 
            this.myMethod()
        }
    }

    myMethod = () => {
        if(this.state.pendingStudentIDs.length !== 0 && this.state.users.length !== 0){
            this.myOtherFunction()
        }
    }

    myOtherFunction = () => {
        this.state.users.forEach(student => {
            if(this.state.pendingStudentIDs.includes(student.id)) {
                this.setState({students: this.state.students.concat(student)})
            }
        })
    }

    handleAccept = (student) => {
        fetch(`http://localhost:3000/courses/${this.props.match.params.id2}/enroll`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
              student_ids: [...this.state.enrolledStudents, student.id]  
            })
        })
        fetch(`http://localhost:3000/courses/${this.props.match.params.id2}/delete_pending`, {
                method: 'DELETE',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    student_id: student.id
                })
            })
        
    }
    getPending = () => {
        fetch(`http://localhost:3000/courses/${this.props.match.params.id2}`)
        .then(resp => resp.json())
        .then(course => this.setState({pendingStudentIDs: this.state.pendingStudentIDs.concat(parseInt(course.pending_student_ids))}))
    }

    getEnrolled = () => {
        fetch(`http://localhost:3000/courses/${this.props.match.params.id2}`)
        .then(resp => resp.json())
        .then(course => this.setState({enrolledStudentIDs: course.student_ids, readyToLoad: true}))
    }

    getPotential = () => {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(users => this.setState({users: this.state.users.concat(users)}))
    }


    render() {
        console.log(this.state.enrolledStudentIDs)
        if(this.state.readyToLoad === false){
            return <h1>Loading...</h1>
        }
        return (
            <div>
                <h1>List of pending students to be accepted into the course</h1>
                {this.state.students.map(student =>{
                    return<div>
                         <h1>{student.name}</h1>
                         <button onClick={() => this.handleAccept(student)}>Accept</button>
                         </div>
                })}
                <h1>Enrolled Students</h1>
                {this.state.users.map(student =>{
                    if(this.state.enrolledStudentIDs.includes(student.id.toString())) {
                        return<div>
                            <h1>{student.name}</h1>
                            </div>
                    }
                })}
            </div>
        )
    }
}

export default addStudentToCourse
