import React from 'react'
import TeacherSpecificCalendar from './TeacherSpecificCalendar'
import QuickSelectors from './QuickSelectors'
import AllOpen from './AllOpen'
import First8Open from './First8Open'
import NavBarTeacherSpecificClass from './NavBarTeacherSpecificClass'

export default class TeacherSpecificClass extends React.Component{
    state = {
        all: false,
        allAssignments: [],
        first8Assignments: []
    }

    getAssignments = (assignment) => {
        assignment.forEach(ass => {
            if(ass.course_id === parseInt(this.props.match.params.id2)) {
                this.setState({allAssignments: this.state.allAssignments.concat(ass)}, () => {
                    if(this.state.allAssignments.length > 8) {
                        this.setState({first8Assignments: this.state.allAssignments.slice(0,8)})
                    }
                })
            }  
        })
    }

    componentDidMount() {
        fetch('http://localhost:3000/assignments')
        .then(resp => resp.json())
        .then(assignment => this.getAssignments(assignment))
    }

    switchShow = () => {
        this.setState({
            all: !this.state.all
        })
    }


    render(){
        console.log(this.state.first8Assignments)
        let selector = null
        if (this.state.all === true){
            selector = <AllOpen assignments={this.state.allAssignments} switch={this.switchShow}/>
        } else if (this.state.all === false){
            selector = <First8Open assignments={this.state.first8Assignments} switch={this.switchShow}/>
        }
        // if (this.state.first8Assignments.length === 0){
        //     return <h1>Loading...</h1>
        // }
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