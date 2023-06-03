import { useState, useEffect } from 'react';
import valorantAgents from './Data/agentDescriptions';
import styled from 'styled-components';

const AgentsContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  top: 100px;
  z-index: 101;
`;

const AgentCard = styled.div`
  display: flex;
  flex-direction: row;
`;

const AgentImage = styled.img`
  display: flex;
  max-height: 500px;
  max-width: 500px;
  height: 100%;
  width: 100%;
  transform: ${(props) =>
    props.animateimage ? 'translateY(0)' : 'translateY(100px)'};
  opacity: ${(props) => (props.animateimage ? 1 : 0)};
  transition: transform 2s ease-in-out, opacity 2s ease-in-out;
`;

const AgentInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  color: #282c34;
  font-family: 'Bebas Neue';
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 12px 0 0 0;
`;

const Selector = styled.div`
  max-height: 25px;
`;

const AgentsCard = ({ agents, setAgents }) => {
  const [currentAgent, setCurrentAgent] = useState('');
  const [animateImage, setAnimateImage] = useState(false);

  const handleSubmit = (newAgent) => {
    console.log('animateImage1', animateImage);
    setAnimateImage(!animateImage);
    setTimeout(() => {
      console.log('animateImage2', animateImage);
      setCurrentAgent(newAgent);
      setAnimateImage(true);
    }, 2000);
  };

  useEffect(() => {
    console.log('currentAgent', currentAgent);
    //console.log('animateImage', animateImage);
    //setAnimateImage(!animateImage);
  }, [currentAgent]);

  return (
    <AgentsContainer>
      {/* <button onClick={() => setAnimateImage(!animateImage)}></button> */}
      <select onChange={(e) => handleSubmit(e.target.value)}>
        {agents.map((agent, index) => (
          <option key={index} value={agent.name}>
            {agent.name}
          </option>
        ))}
      </select>
      {currentAgent ? (
        <AgentCard>
          <AgentImage
            animateimage={animateImage}
            src={valorantAgents[`${currentAgent}`].image}
            alt='agent'
          />
          <AgentInfo>
            <Title>{currentAgent}</Title>
            <Header>##ROLE</Header>
            <p>{valorantAgents[`${currentAgent}`].role}</p>
            <Header>##BIO</Header>
            <p>{valorantAgents[`${currentAgent}`].bio}</p>
            <Header>##ABILITIES</Header>
            <p>{valorantAgents[`${currentAgent}`].abilities}</p>
          </AgentInfo>
        </AgentCard>
      ) : (
        <div style={{ height: '500px' }}>Choose an Agent!</div>
      )}
    </AgentsContainer>
  );
};

// const AgentInfo = {
//   display: 'flex',
//   width: '50%',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   // padding: '16px',
//   // margin: '0 0 16px',
//   // flexWrap: 'wrap',
//   padding: '20px',
//   backgroundColor: '#f7f7f7',
//   borderRadius: '10px',
//   boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
//   maxWidth: '400px',
//   //margin: '20px',
//   color: '#282c34',
// };

// const ImageStyle = {
//   display: 'flex',
//   maxHeight: '500px',
//   maxWidth: '500px',
//   height: '100%',
//   width: '100%',
//   //padding: '10px',
//   transform: animateImage ? 'translateY(0)' : 'translateY(100px)',
//   opacity: animateImage ? 1 : 0,
//   transition: 'transform 2s ease-in-out, opacity 2s ease-in-out',

// useEffect(() => {
//   console.log('currentAgent', currentAgent);
//   //console.log('animateImage', animateImage);
//   //setAnimateImage(!animateImage);
// }, [currentAgent]);

export default AgentsCard;
