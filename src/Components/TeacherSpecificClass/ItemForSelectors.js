import React from 'react'

export default class ItemForSelectors extends React.Component{
    render(){
        return(
            <div>
             <li>{this.props.announcement.description}}</li>
            </div>
        )
    }
}