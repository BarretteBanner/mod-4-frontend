import React from 'react';
import LandingPage from './Components/Landing/LandingPage';
import SignupPage from './Components/Signup/SignupPage';
import StudentHome from './Components/Student/StudentHome';
import TeacherHome from './Components/Teacher/TeacherHome';
import CourseCatalog from './Components/Student/CourseCatalog';
import TeacherClassInfo from './Components/ClassAccept/TeacherClassInfo';
import AddGradesPage from './Components/Grades/AddGradesPage';
import TeacherSpecificClass from './Components/TeacherSpecificClass/TeacherSpecificClass';
import StudentSpecificClass from './Components/StudentSpecifcClass/StudentSpecificClass';
import ModalScrollingExample from './Components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom' 
import StudentSignUpForm from './Components/Signup/StudentSignUpForm';
import TeacherSignUpForm from './Components/Signup/TeacherSignUpForm';

export default class App extends React.Component{
  state = {
    schools: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/schools')
    .then(resp => resp.json())
    .then(schools => this.setState({schools: schools}))
  }

  handleSubmit = (e) => {
    e.persist()
    if(e.target.password.value !== e.target.password_confirmation.value) {
      alert("Passwords don't match")
    } else {
      this.submitCurrentUser(e)
    }
  }


  submitCurrentUser(e) {
    e.persist()
    fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        password_digest: e.target.password.value,
        school_id: e.target.school_id.value,
        gender: e.target.gender.value,
        isTeacher: e.target.isTeacher.value
      })
    })
    e.target.reset()
    if(e.target.isTeacher.value === 'true') {
      this.setState({
        current_page: 'teacherHome'
      })
    } else {
      this.setState({
        current_page: 'studentHome'
      })
    }
  }

  render(){
    return(
      <BrowserRouter>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/signup" component={SignupPage}/>
        <Route path="/signup_student" component={StudentSignUpForm}/>
        <Route path="/signup_teacher" component={TeacherSignUpForm}/>
        <Route path="/student_home" component={StudentHome}/>
        <Route path="/teacher_home" component={TeacherHome}/>
        <Route path="/catalog" component={CourseCatalog}/>
        <Route path="/enroll_students" component={TeacherClassInfo}/>
        <Route path="/add_grades" component={AddGradesPage}/>
        <Route path="/teacher_class" component={TeacherSpecificClass}/>
        <Route path="/student_class" component={StudentSpecificClass}/>
        {/* Settings won't have a route. Just an onclick for that page */}
    </BrowserRouter>
    )
  }
}