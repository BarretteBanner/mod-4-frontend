import React from 'react'
import StudentSignUpForm from './StudentSignUpForm'
import TeacherSignUpForm from './TeacherSignUpForm'

export default class SignupPage extends React.Component{
    state = {
        section: "initialSelect"
    }
    render(){
        let component = null
        if (this.state.section === "initialSelect"){
            component = <div>
            <h1>Signup Page</h1>
            <button
            onClick={() => this.setState({section: "studentSelect"})}
            >Student</button>
            <button
            onClick={() => this.setState({section: "teacherSelect"})}
            >Teacher</button>
           </div>
        } else if (this.state.section === "studentSelect"){
            component = <StudentSignUpForm passwordCheck={this.props.passwordCheck}/>
        } else if (this.state.section === "teacherSelect"){
            component = <TeacherSignUpForm passwordCheck={this.props.passwordCheck}/>
        }
        return(
            component
        )
    }
}