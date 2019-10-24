import React, { Component } from 'react'
import { Button, Form} from 'semantic-ui-react'
import { Redirect } from 'react-router'
export class AddAssignments extends Component {

    state = {
        redirect: false
    }

    handleSubmit = (e) => {
        e.persist()
        fetch('http://localhost:3000/assignments', {
            method: "post",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
              name: e.target.name.value,
              category: e.target.category.value,
              isComplete: e.target.isComplete.value,
              course_id: e.target.courseID.value
            })
        })
        this.setState({redirect: true})
    }

    render() {
        if(this.state.redirect === true) {
            return <Redirect push to={`/teacher/${this.props.match.params.id}/class/${this.props.match.params.id2}`}></Redirect>
        } else {
        return (
            <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Input fluid name='name' label='Assignment' required/>
                <Form.Field label='Category' control='select' name='category' required>
                     <option value='homework'>Homework</option>
                     <option value='quiz'>Quiz</option>
                     <option value='test'>Test</option>
                     <option value='final'>Final</option>
                </Form.Field>
                <Form.Input type='hidden' name='isComplete' value='false'/>
                <Form.Input type='hidden' name='courseID' value={`${this.props.match.params.id2}`}/>
                <Button type='submit'>Submit</Button>
            </Form>
        )}
    }
}

export default AddAssignments
