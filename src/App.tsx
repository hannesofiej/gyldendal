import React from 'react';
import { useState, useEffect } from 'react';
import { fetchData, postData } from './lib/fetch';


import './App.css';

import Header from './components/header/Header';
import SpeechBubble from './components/speechbubble/SpeechBubble';
import Button from './components/button/Button';
import Dog from './components/dog/Dog';
import Answer from './components/answer/Answer';


interface Problem {
  decription?: string;
  id?: number;
  introText?: string;
  problemText?: string;
};
interface CorrectAnswer {
  decription?: string;
  id?: number;
  introText?: string;
  problemText?: string;
};


function App() {

  const [problem, setProblem] = useState<Problem>({});
  const [inputValue, setInputValue] = useState('');
  const [checkValue, setCheckValue] = useState(false);


  const [attempt, setAttempt] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState<CorrectAnswer[]>([]);

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const data = await fetchData(
          'https://glkltp5rvo76hkmz4fraevhshu0yluco.lambda-url.eu-central-1.on.aws/problem'
        );
        setProblem(problem);
      } catch (err) {
        console.log(err)
      } finally {
        console.log("done")
      }
    };
    fetchProblem();
  }, []);

  useEffect(() => {
    const postAnswer = async () => {
      try {
        const body = {input0: inputValue}
        const data = await postData(
          'https://glkltp5rvo76hkmz4fraevhshu0yluco.lambda-url.eu-central-1.on.aws/check',
          body
        );
        console.log(data)
      } catch (err) {
        console.log(err)
      } finally {
        console.log("done")
      }
    };
    if(checkValue){
      postAnswer();
    }
    
  }, [checkValue]);

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("check answer:", inputValue)
    setCheckValue(true)
  }
  const changeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
  
    setInputValue(event.target.value);
  }

  return (
    <div className="App">
      <Header text={problem.introText} />

      <Dog attempt={attempt} />
      <SpeechBubble description="Kvik er en sød <b>hund</b>. Han elsker at lære nye ting." />
      <form>
        <Answer problemtext="Kvik is a nice {{input0}}. He loves to learn new things." 
        value={inputValue} 
        onChange={changeAnswer} />
        <Button text="Tjek mit svar" 
        onClick={checkAnswer} />
      </form>
    </div>
  );
}

export default App;
