import React from 'react'
export default class Quiz extends React.Component{
    render(){
        return(
            <div>
                <table style={{border: "1px solid black"}}>
                <caption>Quiz</caption>
                    <tr style={{border: "1px solid black"}}>
                        <th style={{border: "1px solid black"}}>Date</th>
                        <th style={{border: "1px solid black"}}>Name</th>
                        <th style={{border: "1px solid black"}}>Grade</th>
                    </tr>
                    <tr style={{border: "1px solid black"}}>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    <tr style={{border: "1px solid black"}}>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                    </tr>
                </table>
            </div>
        )
    }
}