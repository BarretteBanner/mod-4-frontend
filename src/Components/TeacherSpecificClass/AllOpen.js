import React from 'react'
import OpenCard from './OpenCard';

export default class AllOpen extends React.Component{
    render(){
        return(
            <div>
                <button
                onClick={() => this.props.switch()}
                >Show Only 8</button>
                {this.props.assignments.map(assignment => {
                return <OpenCard key={assignment.id} assignment={assignment}/>
                })}   
            </div>
        )
    }
}