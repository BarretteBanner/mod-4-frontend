import React from 'react'
import NavBar from './NavBar'
import DemoVideo from './DemoVideo'
import InfiniteScrollArea from './InfiniteScrollArea'
import '../../css/landingPage.css'
export default class LandingPage extends React.Component{
    render(){
        return(
            <div className='landingPage'>
                <NavBar />
                <DemoVideo/>
                <InfiniteScrollArea/>
            </div>
        )
    }
}