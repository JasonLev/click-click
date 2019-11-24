import React from 'react';
import './App.css';

import Header from './components/Header'
import Instructions from './components/Instructions'
import Board from './components/Board'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Instructions />
      <Board />
      <Footer />
    </div>
  );
}

export default App;
