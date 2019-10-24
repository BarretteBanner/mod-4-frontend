import React from 'react'
import GradeBoxes from './GradeBoxes'
import Calculator from './Calculator'
import Documents from './Documents'
import '../../css/studentSpecificPage.css'
import NavBar from '../Student/NavBar'

export default class StudentSpecificClass extends React.Component{

    state = {
        studentTest: [],
        totalTest: 0,
        averageTest: 0,
        studentHW: [],
        totalHW: 0,
        averageHW: 0,
        studentQuiz: [],
        totalQuiz: 0,
        averageQuiz: 0,
        studentFinal: [],
        totalFinal: 0,
        stage: 0
    }

    componentDidMount() {
        fetch('http://localhost:3000/grades')
        .then(resp => resp.json())
        .then(grades => this.setState({
            studentTest: grades.filter(grade => grade.user_id === parseInt(this.props.match.params.id) && grade.assignment.category === 'test'),
            studentHW: grades.filter(grade => grade.user_id === parseInt(this.props.match.params.id) && grade.assignment.category === 'homework'),
            studentQuiz: grades.filter(grade => grade.user_id === parseInt(this.props.match.params.id) && grade.assignment.category === 'quiz'),
            studentFinal: grades.filter(grade => grade.user_id === parseInt(this.props.match.params.id) && grade.assignment.category === 'final'),
            stage: 1
        }))
        }

    componentDidUpdate() {
        if(this.state.stage === 1) {
            this.getTestAverage()
        }
        if(this.state.stage === 2) {
            this.getQuizAverage()
        }
        if(this.state.stage === 3) {
            this.getHWAverage()
        }
        if(this.state.stage === 4) {
            this.getFinal()
        }
    }
    getTestAverage = () => {
       let testArray = this.state.studentTest.map(test => {
            return test.value
        })
        let sum = testArray.reduce(function(a, b){ return a + b}, 0)
        let average = sum / testArray.length
        this.setState({totalTest: sum, averageTest: average})
        this.setState({stage: 2})
    }
    getQuizAverage = () => {
        let quizArray = this.state.studentQuiz.map(quiz => {
             return quiz.value
         })
         let sum = quizArray.reduce(function(a, b){ return a + b}, 0)
         let average = sum / quizArray.length
         this.setState({totalQuiz: sum, averageQuiz: average})
         this.setState({stage: 3})
     }
     getHWAverage = () => {
        let hwArray = this.state.studentHW.map(hw => {
             return hw.value
         })
         let sum = hwArray.reduce(function(a, b){ return a + b}, 0)
         let average = sum / hwArray.length
         this.setState({totalHW: sum, averageHW: average})
         this.setState({stage: 4})
     }
     getFinal = () => {
         this.setState({stage: 5})
     }
    
    render(){
        return(
            <div className="studentSpecificClass">
                <NavBar studentID={this.props.match.params.id}/>
                <GradeBoxes studentID={this.props.match.params.id} classID={this.props.match.params.id2}/>
                <Calculator
                testArrayLength = {this.state.studentTest.length}
                totalTest={this.state.totalTest}
                averageTest={this.state.averageTest}
                quizArrayLength = {this.state.studentQuiz.length}
                totalQuiz={this.state.totalQuiz}
                averageQuiz={this.state.averageQuiz}
                hwArrayLength = {this.state.studentHW.length}
                totalHW={this.state.totalHW}
                averageHW={this.state.averageHW}
                totalFinal={this.state.totalFinal}

                />
                <Documents/>
            </div>
        )
    }
}