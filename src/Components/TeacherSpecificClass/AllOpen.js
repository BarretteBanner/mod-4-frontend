import React from 'react'
import OpenCard from './OpenCard';

export default class AllOpen extends React.Component{
    render(){
        return(
            <div className = 'assignments'>
                {this.props.assignments.map(assignment => {
                return <OpenCard key={assignment.id} assignment={assignment}/>
                })}   
            </div>
        )
    }
}