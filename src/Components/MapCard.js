import React from 'react';
import mapInfoData from './Data/mapInfo';
import styled, { css } from 'styled-components';

const MapCard = ({ maps, setMaps }) => {
  console.log('from child comp maps', maps);

  const MapContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  const Map = styled.div`
    display: flex;
    flex-direction: column;
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
      max-height: 200px;
    }
  `;
  const Title = styled.div`
    display: flex;
    font-family: 'Bebas Neue, san serif';
    font-weight: bold;
    font-size: 24px;
    padding: 12px;

    justify-content: center;
  `;

  console.log(mapInfoData);
  return (
    <MapContainer id='maps'>
      {maps.map((map, index) => (
        <Map key={index}>
          <Title>{`${map.name}`}</Title>
          <img src={mapInfoData[`${map.name}`].image} alt='map' />
        </Map>
      ))}
    </MapContainer>
  );
};

export default MapCard;
