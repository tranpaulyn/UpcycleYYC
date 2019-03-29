import React from 'react'
import logo from './logo.svg';

class Home extends React.Component {

    render(){
        return(
            <div>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <h1>This is something cool?</h1>
          <p>Paulyn was here</p>
          </div>
        )
    }
}

export default Home