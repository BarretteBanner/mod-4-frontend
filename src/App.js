import React from 'react';
import LandingPage from './Components/Landing/LandingPage';
import SignupPage from './Components/Signup/SignupPage';

export default class App extends React.Component{
  state = {
    current_page: "landing"
  }


  changeCurrentPage = (page) => {
    this.setState({
      current_page: page
    })
  }

  handleCurrentUser = (e) => {
    e.preventDefault()
    e.persist()
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        password_confirmation: e.target.confirmPassword.value,
        gender: e.target.gender.value,
        isTeacher: e.target.isTeacher.value
      })
    })
    e.target.reset()
  }

  render(){
    let component = null
    if (this.state.current_page === "landing"){
      component = <LandingPage page={this.state.current_page} changePage={this.changeCurrentPage}/>
    } else if (this.state.current_page === "signup"){
      component = <SignupPage page={this.state.current_page} changePage={this.changeCurrentPage} handleCurrentUser={this.handleCurrentUser}/>
    }
    return(
      <div>
        {component}
      </div>
    )
  }
}