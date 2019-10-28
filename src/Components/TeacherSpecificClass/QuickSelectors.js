import React from 'react'
import ItemForSelectors from './ItemForSelectors'

export default class QuickSelectors extends React.Component{
    render(){
        return(
            <div className='announcements'>
                <div >
                    {this.props.announcements.map(announcement => {
                        return<ItemForSelectors announcement = {announcement} key={announcement.id}/>
                    })}
                </div>
            </div>
        )
    }
}