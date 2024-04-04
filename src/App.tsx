import { useState, useEffect } from 'react';
import { fetchData } from './lib/fetch';
import './App.css';

import Header from './components/header/Header';
import Form from './components/form/Form';


interface Problem {
  description?: string;
  id: number;
  introText?: string;
  problemText: string;
};


function App() {

  const [problem, setProblem] = useState<Problem>();
  const [state, setState] = useState(0);
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

  useEffect(() => {
    if (state === -2) {
      setNext(true)
    }
  }, [state]);



  const updateCount = (correct: boolean) => {
    if (correct) {
      setNext(true)
      setState(1)
    } else {
      setNext(false)
      setState(state - 1)
    }
  }

  const changeStatus = (isCorrect: boolean) => {
    updateCount(isCorrect)
  }
  const resetStatus = () => {
    setState(0);
    setNext(false);
  }



  return (
    <div className="App">
      <Header text={problem?.introText} />
      <Form
        state={state}
        next={next}
        onStatusChange={changeStatus}
        onReset={resetStatus}
        problemtext={problem?.problemText}
        description={problem?.description} />
    </div>
  );
}

export default App;
