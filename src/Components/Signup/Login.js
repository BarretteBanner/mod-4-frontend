import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Redirect } from 'react-router'
import NavBar from './NavBar'
export class Login extends Component {

    state = {
        redirect: false,
        isTeacher: null,
        userId: null
    }
    getUser = (users, email) => {
        users.forEach(user => {
            if(user.email === email) {
                this.setState({
                    userID: user.id,
                    isTeacher: user.isTeacher,
                    redirect: true
                })
            }
        })  
    }

    handleSubmit = (e) => {
        const email = e.target.email.value
        e.persist()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
              'Content-Type':'application/json'
            },
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
            })
        }).then(function(response) {
            return response.json()
        }).then(function(user) {
            return fetch('http://localhost:3000/users')
        }).then(function(response) {
            return response.json()
        }).then(users => this.getUser(users, email))
    }
    render() {
        if (this.state.redirect && this.state.isTeacher === false) {
            return <Redirect push to={`/student/${this.state.userID}/home`}></Redirect>
        } else if (this.state.redirect && this.state.isTeacher === true) {
            return <Redirect push to={`/teacher/${this.state.userID}/home`}></Redirect>
        } else {
        return (
            <div>
                <NavBar/>
                <div>
                <div className='signupPage'>
                <NavBar/>
                <div className="filler1"></div>
                <div className="filler2"></div>
                <div className="filler3"></div>
                <div className="filler4"></div>
                <Form onSubmit={(e) => this.handleSubmit(e)} className='loginform'>
                <Form.Field required>
                    <label>Email: </label>
                    <input placeholder='email' name='email'/>
                </Form.Field>
                <Form.Field required>
                    <label>Password</label>
                    <input type='password' name='password'/>
                </Form.Field>
                <Button type='submit' >Submit</Button>
                </Form>
                </div>
            </div>
        </div>
        )}
    }
}

export default Login
