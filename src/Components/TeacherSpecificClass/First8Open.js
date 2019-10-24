import React from 'react'
import OpenCard from './OpenCard'

export default class First8Open extends React.Component{
    render(){
        return(
            <div>
                <button
                onClick={() => this.props.switch()}
                >Show All</button>
             {this.props.assignments.map(assignment => {
                 return <OpenCard key={assignment.id} assignment={assignment}/>
             })}   
            
            </div>
        )
    }
}