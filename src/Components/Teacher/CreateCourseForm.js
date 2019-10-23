import React, { Component } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Redirect } from 'react-router'
export class CreateCourseForm extends Component {

    state = {
        redirect: false
    }

    handleSubmit = (e) => {
        e.persist()
        fetch('http://localhost:3000/courses', {
            method: 'POST',
            headers: {
              'Content-Type':'application/json'
            },
            body: JSON.stringify({
               name: e.target.name.value,
               subject: e.target.subject.value,
               start_time: e.target.startTime.value,
               end_time: e.target.endTime.value,
               start_date: e.target.startDate.value,
               end_date: e.target.endDate.value,
               user_id: e.target.userID.value,
               description: e.target.description.value
            })
        }).then(function(response) {
            return response.json()
        }).then(function(user) {
            return fetch('http://localhost:3000/courses')
        }).then(function(response) {
            return response.json()
        })
        this.setState({redirect: true})
        e.target.reset()
    }
    render() {
        if (this.state.redirect === true) {
            return <Redirect push to={`/teacher/${this.props.match.params.id}/home`}></Redirect>
        } else {
        return (
            <div>
            <h1>Create Course</h1>
            <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Group widths='equal'>
                <Form.Input fluid label="Course" name='name'/>
                <Form.Input fluid label="Subject" name='subject'/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid label="Start Date" name='startDate' type='date'/>
                <Form.Input fluid label="End Date" name='endDate' type='date'/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid label="Start Time" name='startTime' type='time'/>
                <Form.Input fluid label="End Time" name='endTime' type='time'/>
                </Form.Group>
                <Form.Input label='Description' name='description'/>
                <Form.Field>
                    <input type='hidden' value={`${this.props.match.params.id}`} name='userID'/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
            </div>
        )}
    }
}

export default CreateCourseForm
