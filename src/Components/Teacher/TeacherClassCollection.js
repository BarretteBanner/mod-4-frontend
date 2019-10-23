import React from 'react'
import TeacherClassCard from './TeacherClassCard'
import '../../css/teacherHomePage.css'
export default class TeacherClassCollection extends React.Component{

    render(){
        return(
            <div className='classPageStudent'>
                <div className='classCollectionStudent'>
                {this.props.courses.map(course => {
                    return <TeacherClassCard course = {course} key={course.id} teacherID = {this.props.teacherID}/>
                })}
                </div>
            </div>
        )
    }
}