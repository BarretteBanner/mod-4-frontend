import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../Landing/NavBar'
import '../../css/signupPage.css'
export default class SignupPage extends React.Component{
    render(){
        return(
            <div className='signupPageMain'>
                <NavBar/>
                <div className='studentSignUp' >
                    <Link to="/signup_student" className='student'>Student</Link>
                </div>
                <div className='teacherSignUp'>
                    <Link to="/signup_teacher" className='teacher'>Teacher</Link>
                </div>
            </div>
        )
    }
}