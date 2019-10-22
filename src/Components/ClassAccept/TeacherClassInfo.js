import React from 'react'
import CurrentStudentsList from './CurrentStudentsList'
import RequestedStudentList from './RequestedStudentList'

export default class TeacherClassInfo extends React.Component{
    render(){
        return(
            <div>
                <CurrentStudentsList/>
                <RequestedStudentList/>
            </div>
        )
    }
}