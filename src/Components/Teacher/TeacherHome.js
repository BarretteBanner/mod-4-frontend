import React from 'react'
import TeacherClassCollection from './TeacherClassCollection'
import TeacherAllCalendar from './TeacherAllCalendar'
import NavBarTeacher from './NavBarTeacher'
export default class TeacherHome extends React.Component{

    state = {
        teacherID: this.props.match.params.id
    }

    render(){
        return(
            <div>
                <NavBarTeacher teacherID={this.state.teacherID}/>
                <TeacherClassCollection teacherID={this.state.teacherID}/> 
                <TeacherAllCalendar/>
            </div>
        )
    }
}