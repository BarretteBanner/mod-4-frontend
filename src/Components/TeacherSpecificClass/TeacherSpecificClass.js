import React from 'react'
import TeacherSpecificCalendar from './TeacherSpecificCalendar'
import QuickSelectors from './QuickSelectors'
import AllOpen from './AllOpen'
import First8Open from './First8Open'
import NavBarTeacherSpecificClass from './NavBarTeacherSpecificClass'

export default class TeacherSpecificClass extends React.Component{
    state = {
        all: false
    }
    render(){
        let selector = null
        if (this.state.all === true){
            selector = <AllOpen/>
        } else if (this.state.all === false){
            selector = <First8Open/>
        }
        console.log(this.props)
        return(
            <div>
                <NavBarTeacherSpecificClass teacherID={this.props.match.params.id} courseID={this.props.match.params.id2} />
                <TeacherSpecificCalendar/>
                <QuickSelectors/>
                {selector}
            </div>
        )
    }
}