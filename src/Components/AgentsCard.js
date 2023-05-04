import { useState, useEffect } from 'react';
import valorantAgents from './Data/agentDescriptions';

const AgentsCard = ({ agents, setAgents }) => {
  const [currentAgent, setCurrentAgent] = useState(null);

  const SingleAgentCard = {
    display: 'flex',
    padding: '25px',
    flexDirection: 'column',
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
      }}
    >
      <div>Agents</div>
      <select onChange={(e) => setCurrentAgent(e.target.value)}>
        {agents.map((agent, index) => (
          <option key={index} value={agent.name}>
            {agent.name}
          </option>
        ))}
      </select>
      {currentAgent ? (
        <div style={SingleAgentCard}>
          <div style={{ padding: '20px' }}>{currentAgent}</div>
          <div>{valorantAgents[`${currentAgent}`].role}</div>
          <div>{valorantAgents[`${currentAgent}`].bio}</div>
          <div>{valorantAgents[`${currentAgent}`].image}</div>
          <div>{valorantAgents[`${currentAgent}`].abilities}</div>
        </div>
      ) : (
        <div>Choose an Agent!</div>
      )}
    </div>
  );
};

export default AgentsCard;
