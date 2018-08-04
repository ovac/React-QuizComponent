import React, { Component } from 'react';

import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
    
    render(){
        
        return (
            <main>
                <section>
                <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                <ul>
                    { 
                        this.props.quiz_question.answer_options.map((answer_option, index) =>
                            <QuizQuestionButton button_text={answer_option} key={index} clickHandler={this.handleClick.bind(this)}/>
                        )
                    }
                </ul>
                </section>
            </main>
        )
    }

    handleClick(button_text){
        if (this.props.quiz_question.answer == button_text){
            this.props.showNextQuestionHandler();
        }
    }
}

export default QuizQuestion;