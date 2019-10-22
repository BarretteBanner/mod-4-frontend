import React from 'react'
import GradePreviewTable from './GradePreviewTable'
import GradeCard from './GradeCard'

export default class AddGradesPage extends React.Component{
    state= {
        currentSelection: "preview"
    }
    render(){
        let selection = null
        if (this.state.currentSelection === "card"){
            selection = <GradeCard/>
        } else if (this.state.currentSelection === "preview"){
            selection = <GradePreviewTable/>
        }
        return(
            <div>
             {selection}
            </div>
        )
    }
}