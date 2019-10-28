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
            <div onClick={() => this.handleClick()} className='classCardStudent'>
             <h2>{this.props.course.name}</h2>
             <h3>{this.props.course.subject}</h3>
             <p>{this.props.course.description}</p>
            </div>
        )
    }
}