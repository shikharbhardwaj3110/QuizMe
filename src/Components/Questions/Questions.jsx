import React, { useState } from 'react';
import './Questions.css';
import Question from '../Question/Question';
import Summary from '../Summary/Summary';

const Questions = ({ questions }) => {

    const [currQuestion, setcurrQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [defaultans, setdefaultans] = useState('answer_a')
    const [isQuizOver, setisQuizOver] = useState(false)

    if(isQuizOver) {
        return <Summary answers={answers} questions={questions}/>
    }

    return <Question question={questions[currQuestion]} setcurrQuestion={setcurrQuestion}
        currQuestion={currQuestion} limit={questions.length} setAnswers={setAnswers} answers={answers} defaultans={defaultans}
        setisQuizOver={setisQuizOver}
    />
}

export default Questions