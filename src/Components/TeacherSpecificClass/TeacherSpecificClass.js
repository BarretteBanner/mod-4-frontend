import React from 'react'
import TeacherSpecificCalendar from './TeacherSpecificCalendar'
import QuickSelectors from './QuickSelectors'
import AllOpen from './AllOpen'
import First8Open from './First8Open'

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
        return(
            <div>
                <TeacherSpecificCalendar/>
                <QuickSelectors/>
                {selector}
            </div>
        )
    }
}