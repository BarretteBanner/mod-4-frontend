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

  render(){
    let component = null
    if (this.state.current_page === "landing"){
      component = <LandingPage page={this.state.current_page} changePage={this.changeCurrentPage}/>
    } else if (this.state.current_page === "signup"){
      component = <SignupPage page={this.state.current_page} changePage={this.changeCurrentPage}/>
    }
    return(
      <div>
        {component}
      </div>
    )
  }
}