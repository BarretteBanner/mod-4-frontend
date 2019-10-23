import React from 'react'
import GradeBoxes from './GradeBoxes'
import Calculator from './Calculator'
import Documents from './Documents'
import '../../css/studentSpecificPage.css'
import NavBar from '../Landing/NavBar'

export default class StudentSpecificClass extends React.Component{
    render(){
        return(
            <div className="studentSpecificClass">
                <NavBar/>
                <GradeBoxes/>
                <Calculator/>
                <Documents/>
            </div>
        )
    }
}