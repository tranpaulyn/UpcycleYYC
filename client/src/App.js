import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Signup from './Signup.js'
import Add from './Add.js'

class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/drinks')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/add" component={Add} />
        </Switch>
      </div>
    );
  }
}

export default App;
