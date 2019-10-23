import React from 'react'
import Filter from './Filter'
import CourseCollection from './CourseCollection'
import NavBar from '../Student/NavBar'

export default class CourseCatalog extends React.Component{

   
    
    render(){
        return(
            <div>
                <NavBar studentID={this.props.match.params.id}/>
                <CourseCollection studentID={this.props.match.params.id}/>
            </div>
        )
    }
}