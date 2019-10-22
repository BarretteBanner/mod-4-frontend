import React from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class TeacherSignUpForm extends React.Component{
    render(){
        return(
            <div>
                <h1>Teacher Sign Up Form</h1>
             <Form onSubmit={(e) => this.props.handleSubmit(e)}>
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
                {this.props.schools.map(school => {
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