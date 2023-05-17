import React from 'react';
import mapInfoData from './Data/mapInfo';
import styled, { css } from 'styled-components';
import Video from './Data/Videos/infovid.mp4';

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const MapContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1200px;
  //justify-content: space-evenly;
  top: 100px;
  z-index: 200;
`;

const Map = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  opacity: 0.9;
  border-radius: 10px;
  flex: 0 0 300px;
  margin: 10px;
  border: 2px solid black;
  @keyframes puff-in-center {
    0% {
      transform: scale(2);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      filter: blur(0px);
      opacity: 1;
    }
  }
  animation: puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  img {
    justify-content: center;
    width: 150px;
    height: 150px;
  }
`;
const Title = styled.div`
  display: flex;
  font-family: 'Bebas Neue';
  font-weight: bold;
  font-size: 24px;
  padding-top: 12px;
  color: #282c34;
  justify-content: center;
`;

const MapCard = ({ maps, setMaps }) => {
  console.log('from child comp maps', maps);
  console.log(mapInfoData);
  return (
    <MainContainer id='maps'>
      <VideoBackground
        autoPlay
        loop
        muted
        src={Video}
        type='video/mp4'
      ></VideoBackground>
      <MapContainer>
        {maps.map((map, index) => (
          <Map key={index}>
            <Title>{`${map.name}`}</Title>
            <img src={mapInfoData[`${map.name}`].image} alt='map' />
          </Map>
        ))}
      </MapContainer>
    </MainContainer>
  );
};

export default MapCard;
