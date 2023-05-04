import React from 'react';

const MapCard = ({ maps, setMaps }) => {
  console.log('from child comp maps', maps);
  const MapContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  };
  const MapStyle = {
    height: '100px',
    width: '100px',
  };
  const Title = {};
  return (
    <div>
      <div>Maps</div>
      <div style={MapContainerStyle}>
        {maps.map((map, index) => (
          <div style={MapStyle}>
            <div>{map.name}</div>
            <div>Map Image</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapCard;
