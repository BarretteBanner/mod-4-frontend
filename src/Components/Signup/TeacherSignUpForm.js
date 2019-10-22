import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Redirect } from 'react-router'
import NavBar from './NavBar'
import '../../css/signupForm.css'
export default class TeacherSignUpForm extends React.Component{

    state = {
        schools: [],
        redirect: false,
        userID: null
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

    getUser = (users, email) => {
        users.forEach(user => {
            if(user.email === email) {
                this.setState({
                    userID: user.id,
                    redirect: true
                })
            }
        })
    }

    submitCurrentUser(e) {
        const email = e.target.email.value
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
        .then(function(response) {
            return response.json()
        }).then(function(user) {
            return fetch('http://localhost:3000/users')
        }).then(function(response) {
            return response.json()
        }).then(users => this.getUser(users, email))
    }

    render(){
        if (this.state.redirect) {
            return <Redirect push to={`/teacher/${this.state.userID}/home`}></Redirect>
        } else {
        return(
            <div className='signupPage'>
             <NavBar/>
             <div className="filler1"></div>
             <div className="filler2"></div>
             <div className="filler3"></div>
             <div className="filler4"></div>
             <Form onSubmit={(e) => this.handleSubmit(e)} className='signupform'>
                <Form.Field required>
                    <label>Name: </label>
                    <input placeholder='Name' name='name'/>
                </Form.Field>
                <Form.Field required>
                    <label>Email: </label>
                    <input placeholder='email' name='email'/>
                </Form.Field>
                <Form.Field required>
                    <label>Password</label>
                    <input type='password' name='password'/>
                </Form.Field>
                <Form.Field required>
                    <label>Confirm Password</label>
                    <input type='password' name='password_confirmation'/>
                </Form.Field>
                <Form.Field control='select' name='school_id' required>
                {this.state.schools.map(school => {
                        return <option value={school.id} key={school.id}>{school.name}</option>
                    })}
                </Form.Field>
                <Form.Field label='Gender' control='select' name='gender' required>
                     <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </Form.Field>
                <Form.Field>
                    <input type='hidden' value='true' name='isTeacher'/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
            </div>
        ) 
    }
    }
}