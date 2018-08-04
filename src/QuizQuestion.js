import React, { Component } from 'react';

import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
    
    constructor(props){
        super(props);

        this.state = { incorrectAnswer: false };
    }

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
                {this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p>: null}
            </main>
        );
    }

    handleClick(button_text){
        if (this.props.quiz_question.answer === button_text){
            this.props.showNextQuestionHandler();

            this.setState({ incorrectAnswer: false });

            return;
        }

        this.setState({ incorrectAnswer: true });
    }
}

export default QuizQuestion;