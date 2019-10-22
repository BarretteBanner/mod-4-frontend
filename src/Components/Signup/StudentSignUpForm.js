import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'


export default class StudentSignUpForm extends React.Component{
    render(){
        return(
            <div>
                <h1>Student Sign Up Form</h1>
                <Form onSubmit={(e) => this.props.handleCurrentUser(e)}>
                <Form.Field>
                    <label>Name: </label>
                    <input placeholder='Name' name='name'/>
                </Form.Field>
                <Form.Field>
                    <label>Username: </label>
                    <input placeholder='email' name='email'/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type='password' name='password'/>
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <input type='password' name='confirmPassword'/>
                </Form.Field>
                <Form.Field label='Gender' control='select' name='gender'>
                     <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </Form.Field>
                <Form.Field>
                    <input type='hidden' value='false' name='isTeacher'/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
            </div>
        )
    }
}