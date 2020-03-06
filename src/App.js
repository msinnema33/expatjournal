import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import main from './images/main.jpg'
import PrivateRoute from './components/PrivateRoute.js';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

const StyledApp = styled.div`
  background-image: url(${main});
  background-size: cover;
  height: 100vh;
  opacity: 0.8;

  // .main-btn {
  //   border: 2px solid white;
  //   border-radius: 5px;
  //   padding: 1% 2%;
  //   margin: 2%;
  //   cursor: pointer;
  // }
  // `;

function App() {
  return ( 
    <StyledApp>
    <Route path='/' component={NavBar} />
    <div className="App">
     {/* <h1>Welcome to Expat Journal Team 2</h1>
     <h2>We will be live Friday 6 March 2020</h2> */}
      
     <Router>
     <Switch>
       <PrivateRoute path='/dashboard'>
        <Dashboard component={Dashboard}/> 
       </PrivateRoute> 
       <Route exact path='/sign-in' component={Login} />
       <Route exact path='/sign-up' component={SignUp}/>
     </Switch>
     </Router>
    </div>
    <Route path='/' component={Footer} /> 
    </StyledApp>
  );
}

export default App;
