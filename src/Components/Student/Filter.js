import React from 'react'
import { Button, Form, Radio, Select } from 'semantic-ui-react'
export default class Filter extends React.Component{

    state = {
        filter: '',
        selector: '',
        value: ''
    }

    handleChange = (e, { value }) => this.setState({ value })

    render(){
        return(
            <div>
            <h1>Filter</h1>
            <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Group inline>
                    <label>Parameters</label>
                    <Form.Field
                    control={Radio}
                    label='Course Name'
                    value='course'
                    checked={this.state.value === 'course'}
                    onChange= {this.handleChange}
                    />
                    <Form.Field
                    control={Radio}
                    label='Subject'
                    value='subject'
                    checked={this.state.value === 'subject'}
                    onChange= {this.handleChange}
                    />
                    <Form.Field
                    control={Radio}
                    label='Teacher'
                    value='teacher'
                    checked={this.state.value === 'teacher'}
                    onChange= {this.handleChange}
                    />
                </Form.Group>
                <Form.Input name='search'/>
                <Button>Submit</Button>
            </Form>
            </div>
        )
    }
}