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
import Login from './Components/Signup/Login';
import {BrowserRouter, Route} from 'react-router-dom' 
import StudentSignUpForm from './Components/Signup/StudentSignUpForm';
import TeacherSignUpForm from './Components/Signup/TeacherSignUpForm';
import Final from './Components/StudentGrades/Final';
import Homework from './Components/StudentGrades/Homework';
import Quiz from './Components/StudentGrades/Quiz';
import Test from './Components/StudentGrades/Test';
import { CreateCourseForm } from './Components/Teacher/CreateCourseForm';
import AddAssignments from './Components/TeacherSpecificClass/AddAssignments';
import addStudentToCourse from './Components/TeacherSpecificClass/addStudentToCourse';
import AddDocuments from './Components/TeacherSpecificClass/AddDocuments';

export default class App extends React.Component{

  render(){
    return(
      <BrowserRouter>
        <Route exact path="/" component={LandingPage}/>
        <Route path='/home' component={LandingPage}/>
        <Route path="/signup" component={SignupPage}/>
        <Route path='/login' component={Login}/>
        <Route path="/signup_student" component={StudentSignUpForm}/>
        <Route path="/signup_teacher" component={TeacherSignUpForm}/>
        <Route path="/student/:id/home" component={StudentHome}/>
        <Route path="/teacher/:id/home" component={TeacherHome}/>
        <Route path="/student/:id/catalog" component={CourseCatalog}/>
        <Route path="/teacher/:id/enroll_students" component={TeacherClassInfo}/>
        <Route exact path="/teacher/:id/class/:id2/add_grades" component={AddGradesPage}/>
        <Route exact path="/teacher/:id/class/:id2" component={TeacherSpecificClass}/>
        <Route exact path="/teacher/:id/class/:id2/add_assignment" component={AddAssignments}/>
        <Route exact path="/teacher/:id/class/:id2/add_student" component={addStudentToCourse}/>
        <Route path="/student/:id/class/:id2" component={StudentSpecificClass}/>
        <Route path="/student/:id/grades/:id2/final" component={Final}/>
        <Route path="/student/:id/grades/:id2/homework" component={Homework}/>
        <Route path="/student/:id/grades/:id2/quiz" component={Quiz}/>
        <Route path="/student/:id/grades/:id2/test" component={Test}/>
        <Route path='/teacher/:id/create_course' component={CreateCourseForm}/>
        <Route path='/teacher/:id/class/:id/add_document' component={AddDocuments}/>
        {/* Settings won't have a route. Just an onclick for that page */}
    </BrowserRouter>
    )
  }
}