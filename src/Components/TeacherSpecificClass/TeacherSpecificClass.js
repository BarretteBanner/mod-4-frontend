import React from 'react'
import TeacherSpecificCalendar from './TeacherSpecificCalendar'
import QuickSelectors from './QuickSelectors'
import AllOpen from './AllOpen'
import First8Open from './First8Open'
import NavBarTeacherSpecificClass from './NavBarTeacherSpecificClass'
import { AnnouncementsForm } from './Announcements';
import AllDocuments from './AllDocuments';
import '../../css/teacherSpecificPage.css'


export default class TeacherSpecificClass extends React.Component{
    state = {
        all: true,
        allAssignments: [],
        first8Assignments: [],
        announcements: [],
        documents: []
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

        fetch('http://localhost:3000/announcements')
        .then(resp => resp.json())
        .then(announcements => this.getAnnouncements(announcements))

        fetch('http://localhost:3000/documents')
        .then(resp => resp.json())
        .then(documents => this.getDocuments(documents))
    }

    getAnnouncements = (announcements) => {
        this.setState({announcements: announcements.filter(ann => ann.course_id === parseInt(this.props.match.params.id2))})
    }

    getDocuments = (documents) => {
        this.setState({documents: documents.filter(document => document.course_id === parseInt(this.props.match.params.id2))})
    }

    switchShow = () => {
        this.setState({
            all: !this.state.all
        })
    }


    render(){
        let selector = null
        if (this.state.all === true){
            selector = <AllOpen assignments={this.state.allAssignments} switch={this.switchShow}/>
        } else if (this.state.all === false){
            selector = <First8Open assignments={this.state.first8Assignments} switch={this.switchShow}/>
        }
        return(
            <div>
                <NavBarTeacherSpecificClass teacherID={this.props.match.params.id} courseID={this.props.match.params.id2} />
                <div className='TeacherSpecificPage'>
                    <AnnouncementsForm courseID={this.props.match.params.id2}/>
                    <QuickSelectors announcements={this.state.announcements}/>
                    <AllDocuments documents = {this.state.documents}/>
                    {selector}
                </div>
                <div>
                    <TeacherSpecificCalendar/>
                </div>
            </div>
        )
    }
}