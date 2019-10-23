import React from 'react'

export default class Calculator extends React.Component{
    render(){
        return(
            <div className="calculator">
              <form>
                    <div>
                        <div>
                            <input value='test' name="answer" type="radio" /> Test
                        </div>
                        <div>
                            <input value='homework' name="answer" type="radio" /> Homework
                        </div>
                        <div>
                            <input value='quiz' name="answer" type="radio" /> Quiz
                        </div>
                        <div>
                            <input placeholder="Grade" type='number'/>
                        </div>
                        <div>
                            <label>New Grade: </label>
                        </div>
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        )
    }
}


