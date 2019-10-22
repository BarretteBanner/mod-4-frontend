import React from 'react'
import {Link} from 'react-router-dom'
export default class SignupPage extends React.Component{
    render(){
        return(
            <div>
                <Link to="/signup_student">Student</Link>
                <br/>
                <Link to="/signup_teacher">Teacher</Link>
            </div>
        )
    }
}