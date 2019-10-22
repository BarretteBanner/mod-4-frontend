import React from 'react'
import GradeBoxes from './GradeBoxes'
import Calculator from './Calculator'
import Documents from './Documents'

export default class StudentSpecificClass extends React.Component{
    render(){
        return(
            <div>
                <GradeBoxes/>
                <Calculator/>
                <Documents/>
            </div>
        )
    }
}