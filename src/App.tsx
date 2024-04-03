import React from 'react';
import { useState, useEffect } from 'react';
import { fetchData, postData } from './lib/fetch';


import './App.css';

import Header from './components/header/Header';
import SpeechBubble from './components/speechbubble/SpeechBubble';
import Button from './components/button/Button';
import Dog from './components/dog/Dog';
import TextField from './components/textField/TextField';


interface Problem {
  description?: string;
  id: number;
  introText?: string;
  problemText?: string;
};
interface Status {
  isCorrect: boolean,
  correctAnswer: object
};


function App() {

  const [problem, setProblem] = useState<Problem>();
  const [inputValue, setInputValue] = useState('');
  const [checkValue, setCheckValue] = useState(false);


  const [status, setStatus] = useState<Status>();
  const [incorrect, setIncorrect] = useState(0);
  const [next, setNext] = useState(false);



  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const data = await fetchData(
          'https://glkltp5rvo76hkmz4fraevhshu0yluco.lambda-url.eu-central-1.on.aws/problem'
        );
        setProblem(data);
        console.log(data)
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
        const body = { input0: inputValue }
        const data = await postData(
          'https://glkltp5rvo76hkmz4fraevhshu0yluco.lambda-url.eu-central-1.on.aws/check',
          body
        );
        console.log(data)
        setStatus(data)
        setCheckValue(false)
      } catch (err) {
        console.log(err)
      } finally {
        console.log("done")
      }
    };
    if (checkValue) {
      postAnswer();
    }

  }, [checkValue]);

  useEffect(() => {
    
    if(status){
    
      if (status?.isCorrect) {
        
      }else{
        if(incorrect===2){
          setNext(true)
        }else{
          setIncorrect(incorrect+1)
        }
        
      }

    }
    


  }, [status]);

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCheckValue(true)
  }
  const changeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  return (
    <div className="App">
      <Header text={problem?.introText} />

      <Dog incorrect={incorrect} />
      <SpeechBubble description={problem?.description} />
      <form>
        <TextField incorrect={incorrect} problemtext={problem?.problemText}
          value={inputValue}
          onChange={changeAnswer} />
        <Button incorrect={incorrect} text="Tjek mit svar"
          onClick={checkAnswer} />
      </form>
    </div>
  );
}

export default App;
