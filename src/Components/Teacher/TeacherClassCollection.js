import React from 'react'
import TeacherClassCard from './TeacherClassCards'

export default class TeacherClassCollection extends React.Component{
    render(){
        return(
            <div>
                <TeacherClassCard/>
                <TeacherClassCard/>
            </div>
        )
    }
}