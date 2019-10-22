import React from 'react'
import StudentAllCalendar from './StudentAllCalendar'
import ClassCollection from './ClassCollection'

export default class StudentHome extends React.Component{
    render(){
        return(
            <div>
                <StudentAllCalendar/>
                <ClassCollection/>
            </div>
        )
    }
}