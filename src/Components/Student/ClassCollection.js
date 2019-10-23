import React from 'react'
import ClassCards from './ClassCards'
import Announcements from './Announcements'
export default class ClassCollection extends React.Component{
    render(){
        return(
            <div className='classPageStudent'>
                <div className='classCollectionStudent'>
                <ClassCards/>
                <ClassCards/>
                <ClassCards/>
                <ClassCards/>
                <ClassCards/>
                <ClassCards/>
                <ClassCards/>
                <ClassCards/>
                </div>
                <Announcements/>
            </div>
        )
    }
}