import React from 'react'
import TeacherClassCollection from './TeacherClassCollection'
import TeacherAllCalendar from './TeacherAllCalendar'

export default class TeacherHome extends React.Component{
    render(){
        return(
            <div>
                <TeacherAllCalendar/>
               <TeacherClassCollection/> 
            </div>
        )
    }
}