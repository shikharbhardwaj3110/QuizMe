import React, { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { AiFillWarning } from "react-icons/ai";
import './Form.css';
import axios from 'axios';

const Form = ({ setQuestions }) => {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [loader, setLoader] = useState(false)

    const handleCategory = (e) => {
        if ((e.target.name).length) {
            setCategory(e.target.name);
        }
        else {
            setCategory("");
        }
    }

    const handleDifficulty = (e) => {
        setDifficulty(e.target.name)
    }

    const handleSubmit = async () => {
        setLoader(true);
        const response = await axios.get('https://quizapi.io/api/v1/questions', {
            params: {
                'apiKey': process.env.REACT_APP_API_KEY,
                'category': category,
                'difficulty': difficulty
            }
        });
        setLoader(false);
        setQuestions(response.data)
    }

    let renderCategory, renderDifficulty;
    renderDifficulty = difficulty;
    renderCategory = category;

    if (!(difficulty.length)) {
        renderDifficulty = 'All';
    }
    else {
        renderDifficulty = renderDifficulty.charAt(0).toUpperCase() + renderDifficulty.slice(1);
    }

    if (category == "") {
        renderCategory = "Random";
    }
    else if (category == 'code') {
        renderCategory = "Programming";
    }

    const renderLoader = () => {
        return (
            <div className='text-center'>
                <ClipLoader />
            </div>
        )
    }

    const renderSubmit = () => {
        return (
            <div className='mt-4'>
                <button className='btn btn-primary w-100' onClick={handleSubmit}>Start Quiz</button>
            </div>
        )
    }

    return (
        <div className='mt-5 container'>
            <h3>Configure the quiz settings to get started.</h3>
            <hr></hr>
            <div className='mt-4'>
                <h5 className='text-secondary'>Choose your category</h5>
                <div className='form-category mt-2'>
                    <button className='btn btn-light form-category-btn me-2' name="code" onClick={handleCategory}>Programming</button>
                    <button className='btn btn-light form-category-btn me-2' name="DevOps" onClick={handleCategory}>DevOps</button>
                    <button className='btn btn-light form-category-btn me-2' name="Linux" onClick={handleCategory}>Linux</button>
                    <button className='btn btn-light form-category-btn me-2' name="Docker" onClick={handleCategory}>Docker</button>
                    <button className='btn btn-light form-category-btn me-2' onClick={handleCategory}>Random</button>
                </div>
            </div>

            <div className='mt-4'>
                <h5 className='text-secondary'>Choose difficulty</h5>
                <div className='form-category mt-2'>
                    <button className='btn btn-success me-2' name="easy" onClick={handleDifficulty}>Easy</button>
                    <button className='btn btn-warning me-2' name="medium" onClick={handleDifficulty}>Medium</button>
                    <button className='btn btn-danger me-2' name="hard" onClick={handleDifficulty}>Hard</button>
                </div>
            </div>

            <div className='mt-md-5 mt-4'>
                <span>Selected category : <b>{renderCategory}</b></span>
            </div>

            <div className='mt-2'>
                <span>Selected difficulty : <b>{renderDifficulty}</b></span>
            </div>

            <hr></hr>

            <div className='mt-3 d-flex align-items-center justify-content-center'>
                <AiFillWarning size={25} color='#e00000' />
                <span className='text-danger ms-2'>You cannot go back to previous questions.</span>
            </div>

            <div className='mt-3'>
                {
                    loader ? renderLoader() : renderSubmit()
                }
            </div>


        </div>
    )
}

export default Form