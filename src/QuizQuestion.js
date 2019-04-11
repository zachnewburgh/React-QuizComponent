import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            incorrectAnswer: false
        }
    }

    handleClick(buttonText) {
        const isCorrectAnswer = buttonText === this.props.quiz_question.answer;
        this.setState({incorrectAnswer: !isCorrectAnswer});
        if (isCorrectAnswer) {
            this.props.showNextQuestionHandler();
        }
    }

    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {
                            this.props.quiz_question.answer_options.map((o, i) => 
                                <QuizQuestionButton button_text={o} key={i} clickHandler={this.handleClick.bind(this)}/>
                            )
                        }
                    </ul>
                </section>
                { this.state.incorrectAnswer && <p className="error">Sorry, that's not right</p> }
            </main>
        )
    }
}
export default QuizQuestion;