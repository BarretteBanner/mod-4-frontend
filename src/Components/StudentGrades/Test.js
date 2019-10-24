import React from 'react'
import '../../css/Test.css'


export default class Test extends React.Component {
    state = {
        grades: [],
        assignments: [],
        gradeAssignment: []

    }
    componentDidMount() {
        fetch('http://localhost:3000/grades')
        .then(resp => resp.json())
        .then(grades => this.getUserGrades(grades))
    }

    getUserGrades = (grades) => {
        grades.forEach(grade => {
            if(grade.user_id === parseInt(this.props.match.params.id)) {
                this.setState({grades: this.state.grades.concat(grade)}, () => {
                    fetch('http://localhost:3000/assignments')
                    .then(resp => resp.json())
                    .then(assignments => this.getUserAssignmentGrades(assignments))
                })
            }
        })
    }

    getUserAssignmentGrades = (assignments) => {
        this.setState({assignments: assignments}, () => {
            this.getGradeAssignments()
        })
    }

    getGradeAssignments = () => {
        let array = []
        this.state.grades.forEach(grade => {
            this.state.assignments.forEach(assignment => {
                if (grade.assignment_id === assignment.id){
                    array.push(assignment)
                }
            })
        })
        this.setState({
            gradeAssignment: array
        })
    }
 
    render() {
        console.log(this.state.assignments)
        console.log(this.state.gradeAssignment)
        if (this.state.gradeAssignment.length === 0){
            return <h1>Loading...</h1>
        }
        return (
            <div className="TestPage">
                {this.state.grades.map((grade, index) => {
                    return<div className="Grades">
                        <div>
                            <h1>0.5/12/2019</h1>
                        </div>
                        <div>
                            <h1>{this.state.gradeAssignment[index].name}</h1>
                        </div>
                        <div>
                           <h1>{grade.value}</h1> 
                        </div>
                    </div>   
                })}
            </div>
        )
    }
}