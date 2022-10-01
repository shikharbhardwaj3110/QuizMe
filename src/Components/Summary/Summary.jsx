import React from 'react';
import './Summary.css';
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Summary = ({ answers, questions }) => {

    let correct_answers_final = []                                             //FOR STORING EXTRACTED CORRECT ANSWERS
    questions.forEach((item) => {
        let temp_obj = item.correct_answers;
        Object.keys(temp_obj).forEach(answer_key => {
            if (temp_obj[answer_key] == 'true') {
                correct_answers_final.push(answer_key)                         //ADDING CORRECT ANSWERS FOR COMPARING WITH USER ANSWERS
            }
        })
    })

    let correct_count = 0;

    for (let i = 0; i < answers.length; i++) {
        if (answers[i][7] == correct_answers_final[i][7])
            correct_count += 1;
    }

    return (
        <div className='container'>
            <div className='mt-5 text-center'>
                <div>
                    <h3>Quiz Summary</h3>
                    <hr></hr>
                </div>
                <div className='mt-5'>
                    <span className='score-title border bg-light rounded p-1 px-2'>Your Score : <b>{correct_count}/{answers.length}</b></span>
                </div>

                <div className='py-5 row'>
                    {
                        questions.map((question, i) => {
                            console.log(answers[i][7] == correct_answers_final[i][7])
                            return (
                                <div className='col-12 col-md-8 m-auto text-light'>
                                    <div className={`border rounded py-3 text-start d-flex ps-2 pe-1  ${answers[i][7] == correct_answers_final[i][7] ? 'bg-success' : 'bg-danger'}`}>
                                        <div className='d-flex'>
                                            {
                                               answers[i][7] == correct_answers_final[i][7] ? <TiTick size={30} color='white'/> : <ImCross size={30} color='white' /> 
                                            }
                                            <b className='mx-3'>{i + 1}.</b>
                                        </div>
                                        {question.question}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}

export default Summary