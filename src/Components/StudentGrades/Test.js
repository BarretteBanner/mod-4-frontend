import React from 'react'
export default class Test extends React.Component{
    render(){
        return(
            <div>
                <table style={{border: "1px solid black", width: "100%", marginRight:10}}>
                <caption>Test</caption>
                    <tr style={{border: "1px solid black"}}>
                        <th style={{border: "1px solid black"}}>Date</th>
                        <th style={{border: "1px solid black"}}>Name</th>
                        <th style={{border: "1px solid black"}}>Grade</th>
                    </tr>
                    <tr style={{border: "1px solid black"}}>
                        <td>05/17/2019</td>
                        <td>Test 5</td>
                        <td>50</td>
                    </tr>
                    <tr style={{border: "1px solid black"}}>
                        <td>05/31/2019</td>
                        <td>Test 6</td>
                        <td>94</td>
                    </tr>
                </table>
            </div>
        )
    }
}