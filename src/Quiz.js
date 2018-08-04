import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');


class Quiz extends Component {

    constructor(props){
        super(props);

        this.state = {quiz_position: 1};
    }
    
    
    render(){
        
        const isQuizEnd = (this.state.quiz_position - 1 === quizData.quiz_questions.length);

        if (isQuizEnd) {
            return (
                <div>
                    <QuizEnd  resetClickHandler={this.handleResetClick.bind(this)} />
                </div>
            )
        } else {
            return (
                <div>
                    <QuizQuestion 
                        quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} 
                        showNextQuestionHandler={this.showNextQuestion.bind(this)}
                    />
                </div>
            )
        }
    }
    
    showNextQuestion(){
        this.setState((prevState) => ({quiz_position: prevState.quiz_position + 1}));
    }

    handleResetClick(){
        this.setState({quiz_position: 1});
    }
}

export default Quiz;