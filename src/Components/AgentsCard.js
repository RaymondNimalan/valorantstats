import { useState, useEffect } from 'react';
import valorantAgents from './Data/agentDescriptions';

const AgentsCard = ({ agents, setAgents }) => {
  const [currentAgent, setCurrentAgent] = useState(null);
  const [animateImage, setAnimateImage] = useState(true);

  const SingleAgentCard = {
    display: 'flex',
    padding: '25px',
    flexDirection: 'column',
    justifyContent: 'space-around',
  };
  const SelectorStyle = {
    maxHeight: '25px',
  };

  const ImageStyle = {
    display: 'flex',
    width: '100%',
    height: '100%',
    transform: animateImage ? 'translateY(0)' : 'translateY(100px)',
    opacity: animateImage ? 1 : 0,
    transition: 'transform 2s ease-in-out, opacity 2s ease-in-out',
  };

  useEffect(() => {
    console.log('currentAgent', currentAgent);
  }, []);

  console.log('child comp', agents);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        height: '400px',
      }}
    >
      <div>Agents</div>
      <button onClick={() => setAnimateImage(!animateImage)}></button>
      <select
        style={SelectorStyle}
        onChange={(e) => setCurrentAgent(e.target.value)}
      >
        {agents.map((agent, index) => (
          <option key={index} value={agent.name}>
            {agent.name}
          </option>
        ))}
      </select>
      {/* <div style={ImageStyle}>
        <img
          src={valorantAgents[`${currentAgent}`].image}
          alt=''
          style={ImageStyle}
        />
      </div> */}
      {currentAgent ? (
        <div>
          <div style={ImageStyle}>
            <img
              src={valorantAgents[`${currentAgent}`].image}
              alt=''
              style={ImageStyle}
            />
          </div>
          <div style={SingleAgentCard}>
            <div style={{ padding: '20px' }}>{currentAgent}</div>
            <div>{valorantAgents[`${currentAgent}`].role}</div>
            <div>{valorantAgents[`${currentAgent}`].bio}</div>
            <div>{valorantAgents[`${currentAgent}`].image}</div>
            <div>{valorantAgents[`${currentAgent}`].abilities}</div>
          </div>
        </div>
      ) : (
        <div>Choose an Agent!</div>
      )}
    </div>
  );
};

export default AgentsCard;
