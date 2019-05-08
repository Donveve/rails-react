
import React, { Component } from 'react';
import Signin from './components/signin';
import Signout from './components/signout';
import Signup from './components/signup';

import { Container } from 'reactstrap';
import Home from './components/Home';
import IdeasContainer from './components/IdeasContainer'
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
        <BrowserRouter>
          <NavBar/>
          <Route path="/signin" component={Signin} />
          <Route path="/signout" component={Signout} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/" component={Home}/>
          <Route path="/demo" component={IdeasContainer}/> 
          
    </BrowserRouter>
        </Container>
      </div>  
);
}
}

export default App
