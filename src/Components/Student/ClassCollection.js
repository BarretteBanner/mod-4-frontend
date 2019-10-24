import React from 'react'
import ClassCards from './ClassCards'
import Announcements from './Announcements'
export default class ClassCollection extends React.Component{
    render(){
        return(
            <div className='classPageStudent'>
                <div className='classCollectionStudent'>
                    {this.props.courses.map(course => {
                      return <ClassCards key={course.id} course={course} studentID={this.props.studentID}/>
                    })}
                </div>
                <Announcements/>
            </div>
        )
    }
}