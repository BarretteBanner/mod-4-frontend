import React from 'react'

export default class OpenCard extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.assignment.name}</h1>
                <h2>{this.props.assignment.category}</h2>
                <br/>
                <br/>
            </div>
        )
    }
}