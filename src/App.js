import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PlayerCard from './Components/PlayerCard';
import NavBar from './Components/NavBar';
import AgentsCard from './Components/AgentsCard';

const App = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    getAgents();
    console.log('agents from useEffect', agents);
  }, []);

  async function getAgents() {
    try {
      console.log('hello from fetch request');
      const response = await axios.get('http://localhost:7653/agents');
      const characters = await response.data.characters;
      console.log('response characters', characters);
      setAgents(characters);
      return response;
    } catch (error) {
      console.log('error from axios request to backend', error);
    }
  }
  return (
    <div className='App'>
      <NavBar />
      <header className='App-header'>
        <PlayerCard />
        <AgentsCard agents={agents} setAgents={setAgents} />
        <img src={logo} className='App-logo' alt='logo' />
        <button>Hello</button>
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
};

export default App;
