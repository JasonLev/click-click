import React, { useState } from 'react';
import './App.css';

import Header from './components/Header'
import Instructions from './components/Instructions'
import Board from './components/Board'
import Footer from './components/Footer'

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const increment = () => {
    setScore(score + 1);
    if (highScore < score + 1) {
      setHighScore(score + 1);
    }
  } 
  const reset = () => {
    setScore(0)
  }

  return (
    <div>
      <Header score={score} highScore={highScore} />
      <Instructions />
      <Board increment={increment} reset={reset} />
      <Footer />
    </div>
  );
}

export default App;
