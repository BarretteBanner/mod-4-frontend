import React from 'react'

export default class Calculator extends React.Component{

    state = {
        actualHWPoints: 0,
        newHWPoints: 0,
        actualQuizPoints: 0,
        newQuizPoints: 0,
        actualTestPoints: 0,
        newTestPoints: 0,
        change: 0
    }


    handleSubmit = (e) => {
        e.persist()
        e.preventDefault()
        if(e.target.answer.value === 'homework') {
           let newTotal = this.props.totalHW + parseInt(e.target.grade.value)
           let oldAverage = this.props.totalHW / this.props.hwArrayLength
           let newAverage = newTotal / (this.props.hwArrayLength + 1)
           let actualHWPoints = (0.10 * oldAverage)
           let newHWPoints = (0.10 * newAverage)
           this.setState({actualHWPoints: actualHWPoints, newHWPoints: newHWPoints, change: (newHWPoints - actualHWPoints)})
        } else if (e.target.answer.value === 'quiz') {
        let newTotal = this.props.totalHW + parseInt(e.target.grade.value)
           let oldAverage = this.props.totalQuiz / this.props.quizArrayLength
           let newAverage = newTotal / (this.props.quizArrayLength + 1)
           let actualQuizPoints = (0.20 * oldAverage)
           let newQuizPoints = (0.20 * newAverage)
           this.setState({actualQuizPoints: actualQuizPoints, newQuizPoints: newQuizPoints, change: (newQuizPoints - actualQuizPoints)})

        } else if (e.target.answer.value === 'test') {
           let newTotal = this.props.totalTest + parseInt(e.target.grade.value)
           let oldAverage = this.props.totalTest / this.props.testArrayLength
           let newAverage = newTotal / (this.props.testArrayLength + 1)
           let actualTestPoints = (0.40 * oldAverage)
           let newTestPoints = (0.40 * newAverage)
           this.setState({actualTestPoints: actualTestPoints, newTestPoints: newTestPoints, change: (newTestPoints - actualTestPoints)})
        }
        e.target.reset()
    }

    render(){
        return(
            <div className="calculator">
              <form onSubmit={(e) => this.handleSubmit(e)}>
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
                            <input placeholder="Grade" type='number' name='grade'/>
                        </div>
                        <div>
                            <label>New Grade: </label>
                        </div>
                        <input type="submit"/>
                    </div>
                </form>
                <div>
                   <h1>Total Grade Change: {this.state.change.toFixed(2)}</h1> 
                </div>
            </div>
        )
    }
}


