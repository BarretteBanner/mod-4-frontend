import React from 'react'
import NavBar from './NavBar'
import DemoVideo from './DemoVideo'
import InfiniteScrollArea from './InfiniteScrollArea'

export default class LandingPage extends React.Component{
    render(){
        return(
            <div>
                <NavBar page={this.props.page} changePage={this.props.changePage}/>
                <DemoVideo/>
                <InfiniteScrollArea/>
            </div>
        )
    }
}