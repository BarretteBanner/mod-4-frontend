import React from 'react'
import { Redirect } from 'react-router'
export default class GradeBoxes extends React.Component{
    state = {
        redirect: false
    }

    clickedTest = (choice) =>{
        this.setState({redirect: choice})
    }

    render(){
        if (this.state.redirect === 'test'){
            return <Redirect push to={`/student/${this.props.studentID}/grades/${this.props.classID}/test`}></Redirect>
        } else {
        return(
            <div className="gradeBoxes">
             <h1 className="test" onClick={() => this.clickedTest("test")}>Test</h1>
             <h1 className="quiz">Quiz</h1>
             <h1 className="homework">Homework</h1>
             <h1 className="final">Final</h1>
            </div>
        )}
    }
}