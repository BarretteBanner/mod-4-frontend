import React from 'react'
import Filter from './Filter'
import CourseCollection from './CourseCollection'

export default class CourseCatalog extends React.Component{
    render(){
        return(
            <div>
                <Filter/>
                <CourseCollection/>
            </div>
        )
    }
}