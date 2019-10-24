import React from 'react'
import GradeBoxes from './GradeBoxes'
import Calculator from './Calculator'
import Documents from './Documents'
import '../../css/studentSpecificPage.css'
import NavBar from '../Student/NavBar'

export default class StudentSpecificClass extends React.Component{
    render(){
        return(
            <div className="studentSpecificClass">
                <NavBar studentID={this.props.match.params.id}/>
                <GradeBoxes studentID={this.props.match.params.id} classID={this.props.match.params.id2}/>
                <Calculator/>
                <Documents/>
            </div>
        )
    }
}