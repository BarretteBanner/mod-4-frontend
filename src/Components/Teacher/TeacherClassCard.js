import React from 'react'

import {Link} from 'react-router-dom'

export default class TeacherClassCard extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.course.name}</h3>
                <p>{this.props.course.subject}</p>
                <p><Link to={`/teacher/${this.props.teacherID}/class/${this.props.course.id}`}>See Class Info</Link></p>
            </div>
        )
    }
}