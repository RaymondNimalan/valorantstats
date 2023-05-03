import React from 'react';

const NavBar = () => {
  const menuStyle = {
    padding: '25px',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '75px',
      }}
    >
      <div style={{ padding: '25px' }}>Title</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <div style={menuStyle}>Weapons</div>
        <div style={menuStyle}>Agents</div>
        <div style={menuStyle}>Maps</div>
      </div>
    </div>
  );
};

export default NavBar;
