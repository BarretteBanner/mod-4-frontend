import React from 'react'
import CourseForList from './CourseForList'
import "../../css/courseCatalog.css";
import { Button, Form, Radio } from 'semantic-ui-react'

export default class CourseCollection extends React.Component{
    state = {
        courses: [],
        filteredCourses: [],
        selector: '',
        value: '',
        users: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/courses')
        .then(resp => resp.json())
        .then(allCourses => this.setState({courses: allCourses, filteredCourses: allCourses}))

        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(users => this.setState({users: users}))
    }


    handleSubmit = (e) => {
        e.persist()
        if(this.state.value === 'course') {
           this.setState({filteredCourses: this.state.courses.filter(course => course.name.toLowerCase().includes(e.target.search.value.toLowerCase()))}) 
        } else if (this.state.value === 'subject') {
            this.setState({filteredCourses: this.state.courses.filter(course => course.subject.toLowerCase().includes(e.target.search.value.toLowerCase()))})
        } else if (this.state.value === 'teacher') {
            this.state.users.forEach(user => {
                if (user.name.includes(e.target.search.value)) {
                    this.setState({filteredCourses: this.state.courses.filter(course => course.user_id === user.id)})
                }
            })
        }
        e.target.reset()
    }

    handleChange = (e, { value }) => this.setState({ value })

    render(){
        console.log(this.state.filteredCourses)
        if (this.state.courses === []){
            return <h1>Loading...</h1>
        }
        return(
            <div className="courseCollection">
                {this.state.filteredCourses.map(course => {
                    return <CourseForList course = {course} key={course.id} studentID={this.props.studentID}/>
                })}
                <div className='filter'>
                <h1>Filter</h1>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Group inline>

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
            </div>
            
        )
    }
}