import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PlayerCard from './Components/PlayerCard';
import NavBar from './Components/NavBar';
import AgentsCard from './Components/AgentsCard';
import MapCard from './Components/MapCard';
import AppRouter from './Routes';
import Landing from './Components/Landing';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

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
      const fixedAgentData = await agentsData.filter(
        (obj) => obj.name !== 'Null UI Data!'
      );
      const fixedMapData = await mapData.filter(
        (obj) => obj.name !== 'The Range' && obj.name !== 'Null UI Data!'
      );
      setAgents(fixedAgentData);
      setMaps(fixedMapData);
      return response;
    } catch (error) {
      console.log('error from axios request to backend', error);
    }
  }
  return (
    <AppContainer>
      {/* <AppRouter /> */}
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='/maps'
          element={<MapCard maps={maps} setMaps={setMaps} />}
        />
        <Route
          path='/agents'
          element={<AgentsCard agents={agents} setAgents={setAgents} />}
        />
      </Routes>
    </AppContainer>
  );
};

export default App;
