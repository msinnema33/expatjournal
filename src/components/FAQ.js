import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import itaewon from '../images/itaewon.jpg'
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

const StyledFaq = styled.div`
  background-image: url(${itaewon});
  background-size: cover;
  height: 100vh;
  opacity: 0.8;
  }
  `;

function App() {
    return (
    <StyledFaq>
        <div className="App">
            <h1>Welcome to Expat Journal Team 2 F.A.Q</h1>
            <h2>We will be live Friday 6 March 2020</h2> 
            <h3>Questions on h3 lines</h3>
            <h4>Answers on h4 lines</h4>
            </div>
    </StyledFaq>

    );
}

export default FAQ;