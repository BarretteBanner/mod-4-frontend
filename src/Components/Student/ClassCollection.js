import React from 'react'
import ClassCards from './ClassCards'

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
            </div>
        )
    }
}