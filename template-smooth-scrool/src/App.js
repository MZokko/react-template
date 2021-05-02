import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
      </Router>
      <h3>SAK PASSE</h3>
    </div>
  );
}

export default App;
