import React from 'react'
import ItemForSelectors from './ItemForSelectors'

export default class QuickSelectors extends React.Component{
    render(){
        return(
            <div>
                <ItemForSelectors/>
                <ItemForSelectors/>
                <ItemForSelectors/>
                <ItemForSelectors/>
            </div>
        )
    }
}