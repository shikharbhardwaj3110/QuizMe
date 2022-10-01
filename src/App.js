import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './UI/Navbar/Navbar';
import Form from './Components/Form/Form';
import Questions from './Components/Questions/Questions';

function App() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
  }, [questions])

  return (
    <>
      <Navbar/>
      {
        questions.length ? <Questions questions={questions}/> : <Form setQuestions={setQuestions}/>
      }
      
    </>
  );
}

export default App;
