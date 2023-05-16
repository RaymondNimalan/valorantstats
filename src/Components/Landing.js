import React from 'react';
import styled from 'styled-components';
import Video from './Data/Videos/homepage.mp4';

const LandingContainer = styled.div`
  height: 100vh;
`;

const Background = styled.div`
  position: relative;
  height: 100%;
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  font-family: 'Bebas Neue';
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 101;
  text-shadow: 2px 2px 4px #000000;
  p {
    padding: 8px;
    margin: 0;
  }
`;

const Title = styled.div`
  font-size: 72px;
`;

const Button = styled.div`
  display: flex;
  height: 50px;
  width: 100px;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Landing = () => {
  return (
    <LandingContainer>
      <Background>
        <VideoBackground
          autoPlay
          loop
          muted
          src={Video}
          type='video/mp4'
        ></VideoBackground>
      </Background>

      <TextContainer>
        <Title>Valorant</Title>
        <p>Free to Play</p>
        <p>5 versus 5 Tactical Shooter</p>
        <Button
          onClick={() => {
            window.location = 'https://playvalorant.com/en-us/download/';
          }}
        >
          Play
        </Button>
      </TextContainer>
    </LandingContainer>
  );
};

export default Landing;
