import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {

    render(){
        return(
            <div>
            <header className="App-header">

          </header>
          <h1>Login here</h1>
          <li><Link href='/signup' to='/signup'>Signup</Link></li>
          <li><Link href='/dashboard' to='/dashboard'>Login</Link></li>
          </div>
        )
    }
}

export default Home