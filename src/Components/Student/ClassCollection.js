import React from 'react'
import ClassCards from './ClassCards'

export default class ClassCollection extends React.Component{
    render(){
        return(
            <div>
             <ClassCards/>
             <ClassCards/>
             <ClassCards/>
            </div>
        )
    }
}