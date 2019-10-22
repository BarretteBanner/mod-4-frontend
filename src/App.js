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

export default class App extends React.Component{
  state = {
    current_page: "landing",
    schools: []
  }


  changeCurrentPage = (page) => {
    this.setState({
      current_page: page
    })
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
    console.log(this.state.schools)
    let component = null
    if (this.state.current_page === "landing"){
      component = <LandingPage page={this.state.current_page} changePage={this.changeCurrentPage}/>
    } else if (this.state.current_page === "signup"){
      component = <SignupPage page={this.state.current_page} changePage={this.changeCurrentPage} handleSubmit={this.handleSubmit} schools={this.state.schools}/>
    } else if (this.state.current_page === "studentHome"){
      component = <StudentHome/>
    } else if (this.state.current_page === "teacherHome"){
      component = <TeacherHome/>
    } else if (this.state.current_page === "catalog"){
      component = <CourseCatalog/>
    } else if (this.state.current_page === "addStudentArea"){
      component = <TeacherClassInfo/>
    } else if (this.state.current_page === "addGrade"){
      component = <AddGradesPage/>
    } else if (this.state.current_page === "teacherSpecific"){
      component = <TeacherSpecificClass/>
    } else if (this.state.current_page === "studentSpecific"){
      component = <StudentSpecificClass/>
    } else if (this.state.current_page === "settings"){
      component = <ModalScrollingExample/>
    }
    return(
      <div>
        {component}
      </div>
    )
  }
}