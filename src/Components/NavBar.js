import React from 'react';
//import { Link } from 'react-scroll';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 100;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  height: 75px;
  background-color: white;
  border-radius: 16px;
  opacity: 0.5;
  align-items: center;
  margin: 24px;
  font-family: 'Bebas Neue';
  font-size: 24px;
  text-shadow: 2px 2px 4px #ffffff;
`;

const Title = styled(Link)`
  display: flex;
  align-items: flex-start;
  padding: 25px;
`;

const NavLinks = styled.div`
  display: flex;
  width: 25%;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 12px;
`;

const Links = styled(Link)`
  display: flex;
`;

const NavBar = () => {
  //const Title = styled.div``;

  return (
    <NavContainer>
      <Nav>
        <Title to='/' style={{ padding: '25px' }}>
          Home
        </Title>
        {/* <Link to='/agents'>Agents</Link> */}
        <NavLinks>
          <Links to='/maps'>Maps</Links>
          <Links to='/agents'>Agents</Links>
        </NavLinks>
      </Nav>
    </NavContainer>
  );
};

export default NavBar;
