import React from 'react';
import { useState, useEffect } from 'react';
import { fetchData } from './lib/fetch';
import './App.css';

import Header from './components/header/Header';
import SpeechBubble from './components/speechbubble/SpeechBubble';
import Dog from './components/dog/Dog';
import Form from './components/form/Form';


interface Problem {
  description?: string;
  id: number;
  introText?: string;
  problemText: string;
};


function App() {

  const [problem, setProblem] = useState<Problem>();
  const [correct, setCorrect] = useState(true);
  const [incorrect, setIncorrect] = useState(0);
  const [next, setNext] = useState(false);



  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const data = await fetchData(
          'https://glkltp5rvo76hkmz4fraevhshu0yluco.lambda-url.eu-central-1.on.aws/problem'
        );
        setProblem(data);
      } catch (err) {
        console.log(err)
      }
    };
    fetchProblem();
  }, []);


  const updateCount = (correct: boolean) => {
    if (correct) {
      setNext(true)
    } else {
      if (incorrect === 2) {
        setNext(true)
      } else {
        setIncorrect(incorrect + 1)
      }
    }
  }

  const changeStatus = (isCorrect: boolean) => {
    updateCount(isCorrect)
  }


  return (
    <div className="App">
      <Header text={problem?.introText} />
      <Form
        incorrect={incorrect}
        onStatusChange={changeStatus}
        problemtext={problem?.problemText}
        description={problem?.description} />
    </div>
  );
}

export default App;
