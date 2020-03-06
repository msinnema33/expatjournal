import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.jpg';
import { Link } from "react-router-dom";

const NavSection = styled.header`
  text-align: center;
  

  .nav-btn{
    color: #EAE7DC; 
    padding: 3px;
    margin: 4px;
    background: #E85A4F;
    cursor: pointer;
    border-radius: 9px;
  }
`;
const HeaderDesc = styled.h1`
  color: #E85A4F;
  font-size: 2rem;
`;

const NavBarImg = styled.div`
    
    cursor: pointer;
`;


const NavBar = () => {
    return (
    <NavSection>
      <NavBarImg>
           <img src={logo} alt="journal"/>
        </NavBarImg>
      
      
      <HeaderDesc>Expat Journal Team 2</HeaderDesc>
            <a href='https://reverent-villani-9adcf1.netlify.com/team-page' target="_blank"> 
              <button className='nav-btn'>About Us</button>
            </a>
            <a href='https://reverent-villani-9adcf1.netlify.com/' target="_blank"> 
              <button className='nav-btn'>Marketing</button>
            </a>
            <Link to='/'> 
              <button className='nav-btn'>FAQ</button>
            </Link>
            <Link to='/sign-in'> 
              <button className='nav-btn'>Login</button>
            </Link>
            <Link to='/sign-up'> 
              <button className='nav-btn'>Signup</button>
            </Link>
        </NavSection>
    )
}

export default NavBar;