import React from 'react';
import '../src/assets/css/App.css';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Hola Mundo! Saluda Matias Garcia desde React</p>
      </header>

      <Router></Router>
    </div>
  );
}

export default App;
