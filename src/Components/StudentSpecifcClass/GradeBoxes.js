import React from 'react'
import { Redirect } from 'react-router'
export default class GradeBoxes extends React.Component{
    state = {
        redirect: ''
    }

    clickedTest = (choice) =>{
        this.setState({redirect: choice})
    }

    render(){
        if (this.state.redirect === 'test'){
            return <Redirect push to={`/student/${this.props.studentID}/grades/${this.props.classID}/test`}></Redirect>
        } else if (this.state.redirect === 'quiz') {
            return <Redirect push to={`/student/${this.props.studentID}/grades/${this.props.classID}/quiz`}></Redirect>
        } else if (this.state.redirect === 'homework') {
            return <Redirect push to={`/student/${this.props.studentID}/grades/${this.props.classID}/homework`}></Redirect>
        } else if (this.state.redirect === 'final') {
            return <Redirect push to={`/student/${this.props.studentID}/grades/${this.props.classID}/final`}></Redirect>

        }
        return(
            <div className="gradeBoxes">
             <h1 className="test" onClick={() => this.clickedTest("test")}>Test</h1>
             <h1 className="quiz" onClick={() => this.clickedTest("quiz")}>Quiz</h1>
             <h1 className="homework" onClick={() => this.clickedTest("homework")}>Homework</h1>
             <h1 className="final" onClick={() => this.clickedTest("final")}>Final</h1>
            </div>
        )}
}