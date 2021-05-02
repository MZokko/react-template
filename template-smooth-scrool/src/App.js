import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages';

function App() {
  return (
    <div className='App'>
      <Router>
        <Home/>
        
      </Router>
      <h3>SAK PASSE</h3>
    </div>
  );
}

export default App;
