import React from 'react'
import '../../css/Test.css'


export default class Test extends React.Component {
    state = {
        grades: [],
        readyToLoad: 0,
        userGrades: [],
        gradesForType: []
    }
    componentDidMount() {
        fetch('http://localhost:3000/grades')
        .then(resp => resp.json())
        .then(grades => this.setState({grades: grades}), () => {this.filterByUser()})
    }

    componentDidUpdate() {
        if (this.state.readyToLoad === 0 && this.state.grades.length !== 0){
            this.filterByUser()
        }
        if (this.state.readyToLoad === 1){
            this.filterByType()
        }
    }

    filterByUser = () => {
        let gradesForUser = this.state.grades.filter(grade => grade.user_id === parseInt(this.props.match.params.id))
        console.log(gradesForUser)
        this.setState({
            readyToLoad: 1,
            userGrades: gradesForUser
        })
    }

    filterByType = () => {
        console.log('YYYYYYYYYYYYYYYYYYYYYYY')
        let gradesForType = this.state.userGrades.filter(grade => grade.assignment.category === 'test')
        this.setState({
            gradesForType: gradesForType,
            readyToLoad: 2
        })
    }

    

    render() {
        if (this.state.readyToLoad !== 2){
            return <h1>Loading...</h1>
        }
        return (
            <div className='TestPage'>
                <h1 className='title'>Test Grades</h1>
                <div className='GradesArea'>
                    {this.state.gradesForType.map(grade => {
                        return <div className = 'specificGrade'>
                        <h1 className='name'>{grade.assignment.name}</h1>
                        <h1 className='grade'>{grade.value}</h1>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}