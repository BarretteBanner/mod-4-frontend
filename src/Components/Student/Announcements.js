import React from 'react'

export default class Announcements extends React.Component{

    state ={
        announcements: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/announcements')
        .then(resp => resp.json())
        .then(announcements => this.getAnnouncements(announcements))
    }

    getAnnouncements = (announcements) => {
        this.setState({announcements: announcements})
    }
    render(){
        return(
            <div className='announcements'>
                {this.state.announcements.map(announcement => {
                    return <li>{announcement.description}</li>
                })}
            </div>
        )
    }
}