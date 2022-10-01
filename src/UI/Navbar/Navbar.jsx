import React from 'react';
import './Navbar.css';
import { MdOutlineQuiz } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='border border-top-0 border-start-0 border-end-0 navbar bg-light'>
        <div className='container d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
                <MdOutlineQuiz size={35}/>
                <span className='ms-2 nav-title'>QuizMe</span>
            </div>

            <div>
                <a className='btn btn-dark btn-sm' href='/'>New Quiz</a>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar