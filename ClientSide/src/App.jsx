import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Signup from './Signup.jsx'
import Add from './Add_Item.jsx'
import LoginForm from './Login.jsx'

class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount() {
    axios.get('/api/drinks')
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
          <Route exact path='/login' component={LoginForm}/>
        </Switch>
      </div>
    );
  }
}

export default App;
