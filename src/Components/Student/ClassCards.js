import React from 'react'
import { Redirect } from 'react-router'
export default class ClassCards extends React.Component{

    state = {
        redirect: false
    }

    handleClick = () => {
        this.setState({redirect: true})
    }
    render(){
        if(this.state.redirect === true) {
            return <Redirect push to={`/student/${this.props.studentID}/class/${this.props.course.id}`}></Redirect>
        }
        return(
            <div onClick={() => this.handleClick()}>
             <h1>{this.props.course.name}</h1>
             <h2>{this.props.course.subject}</h2>
             <p>{this.props.course.description}</p>
            </div>
        )
    }
}