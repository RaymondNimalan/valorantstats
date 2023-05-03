import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  async function getStuff() {
    try {
      console.log('hello from fetch request');
      const response = await axios.get('http://localhost:7653/stuff');
      console.log('response', response);
      return response;
    } catch (error) {
      console.log('error from axios request to backend', error);
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <button onClick={() => getStuff()}>Hello</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
