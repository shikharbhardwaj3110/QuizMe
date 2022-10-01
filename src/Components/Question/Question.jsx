import React, { useState } from 'react';
import './Question.css';

const Question = ({ question, setcurrQuestion, currQuestion, limit, setAnswers, answers, defaultans, setisQuizOver }) => {

    const { question: title, category, answers: options } = question;

    const [answer, setAnswer] = useState(defaultans)

    const handleNext = () => {
        if (currQuestion == limit - 1) {
            return;
        }
        setAnswers([...answers, answer])
        setcurrQuestion(currQuestion + 1)
    }

    const handleAnswer = (selected_option) => {
        setAnswer(selected_option)
    }

    const handleSubmit = () => {
        setAnswers([...answers, answer])
        setisQuizOver(true)
    }

    const renderNextButton = () => {
        if(currQuestion == limit-1) {
            return (
                <div className='text-end'>
                    <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
                </div>
            )
        }
        return (
            <div className='text-end'>
                <button className='btn btn-primary' onClick={handleNext}>Next</button>
            </div>
        )
    }

    const renderOptions = () => {
        return (
            Object.keys(options).map((option_key, index) => {
                if (options[option_key]) {
                    return (
                        <div className='col-md-6 col-12 mt-2'>
                            <div className={`p-3 border rounded border-gray question-option-container d-flex align-items-center ${answer == option_key ? 'active' : null}`}
                                onClick={() => { handleAnswer(option_key) }}>
                                <b className='question-number'>{index + 1}.</b>
                                <span className='question-option ms-3'>{options[option_key]}</span>
                            </div>
                        </div>

                    )
                }
            })
        )
    }


    return (
        <div className='container mt-5'>
            <h4>Question {currQuestion + 1}/{limit}</h4>
            <hr></hr>
            <div className='mt-4 pb-md-4 pb-2'>
                <span className='question-title'>{title}</span>
                <div className='mt-4 row'>
                    {
                        renderOptions()
                    }
                </div>
            </div>
            <hr></hr>
            {renderNextButton()}
        </div>
    )
}

export default Question