import React, { Component } from 'react';
// import QuizQuestion from './QuizQuestion';

// let quizData = require('./quiz_data.json');


class QuizQuestionButton extends Component {

    // constructor(props){
    //     super(props);

    //     this.state = {quiz_position: 1};
    // }
    
    render(){

        return (
            <li>
                <button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button>
            </li>
        )
    }

    handleClick(){
        this.props.clickHandler(this.props.button_text);
    }
}

export default QuizQuestionButton;