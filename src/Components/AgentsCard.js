import { useState, useEffect } from 'react';
import valorantAgents from './Data/agentDescriptions';

const AgentsCard = ({ agents, setAgents }) => {
  const [currentAgent, setCurrentAgent] = useState('Gekko');
  const [animateImage, setAnimateImage] = useState(true);

  const AgentInfo = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  };
  const SelectorStyle = {
    maxHeight: '25px',
  };

  const ImageStyle = {
    display: 'flex',
    maxHeight: '500px',
    maxWidth: '500px',
    height: '100%',
    width: '100%',
    padding: '10px',
    transform: animateImage ? 'translateY(0)' : 'translateY(100px)',
    opacity: animateImage ? 1 : 0,
    transition: 'transform 2s ease-in-out, opacity 2s ease-in-out',
  };

  useEffect(() => {
    console.log('currentAgent', currentAgent);
    //console.log('animateImage', animateImage);
    //setAnimateImage(!animateImage);
  }, [currentAgent]);

  const handleSubmit = (newAgent) => {
    console.log('animateImage1', animateImage);
    setAnimateImage(!animateImage);
    console.log('animateImage2', animateImage);
    setTimeout(() => {
      setCurrentAgent(newAgent);
      setAnimateImage(true);
    }, 2000);
  };

  console.log('child comp', agents);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        maxHeight: '500px',
        height: '100%',
      }}
    >
      <div>Agents</div>
      <button onClick={() => setAnimateImage(!animateImage)}></button>
      <select
        style={SelectorStyle}
        onChange={(e) => handleSubmit(e.target.value)}
      >
        {agents.map((agent, index) => (
          <option key={index} value={agent.name}>
            {agent.name}
          </option>
        ))}
      </select>
      {currentAgent ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <img
            src={valorantAgents[`${currentAgent}`].image}
            alt=''
            style={ImageStyle}
          />
          <div style={AgentInfo}>
            <div>{currentAgent}</div>
            <div>{valorantAgents[`${currentAgent}`].role}</div>
            <div>{valorantAgents[`${currentAgent}`].bio}</div>
            <div>{valorantAgents[`${currentAgent}`].abilities}</div>
          </div>
        </div>
      ) : (
        <div style={{ height: '500px' }}>Choose an Agent!</div>
      )}
    </div>
  );
};

export default AgentsCard;
