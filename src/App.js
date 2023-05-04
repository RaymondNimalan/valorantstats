import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PlayerCard from './Components/PlayerCard';
import NavBar from './Components/NavBar';
import AgentsCard from './Components/AgentsCard';
import MapCard from './Components/MapCard';

const App = () => {
  const [agents, setAgents] = useState([]);
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    getAgents();
    console.log('agents from useEffect', agents);
    console.log('maps', maps);
  }, []);

  async function getAgents() {
    try {
      console.log('hello from fetch request');
      const response = await axios.get('http://localhost:7653/agents');
      const agentsData = await response.data.characters;
      const mapData = await response.data.maps;
      console.log('response data', response.data.maps);
      console.log('response characters', agents);
      setAgents(agentsData);
      setMaps(mapData);
      return response;
    } catch (error) {
      console.log('error from axios request to backend', error);
    }
  }
  return (
    <div className='App' style={{ display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <div className='App-header'>
        <PlayerCard />
        <AgentsCard agents={agents} setAgents={setAgents} />
        <MapCard maps={maps} setMaps={setMaps} />
        34
      </div>
    </div>
  );
};

export default App;
