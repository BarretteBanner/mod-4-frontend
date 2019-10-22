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
    current_page: "settings"
  }


  changeCurrentPage = (page) => {
    this.setState({
      current_page: page
    })
  }

  render(){
    let component = null
    if (this.state.current_page === "landing"){
      component = <LandingPage page={this.state.current_page} changePage={this.changeCurrentPage}/>
    } else if (this.state.current_page === "signup"){
      component = <SignupPage page={this.state.current_page} changePage={this.changeCurrentPage}/>
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