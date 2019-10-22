import React from 'react'
import CourseForList from './CourseForList'

export default class CourseCollection extends React.Component{
    render(){
        return(
            <div>
                <CourseForList/>
                <CourseForList/>
                <CourseForList/>
            </div>
        )
    }
}