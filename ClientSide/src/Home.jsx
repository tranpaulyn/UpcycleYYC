import React from 'react'
// import logo from './logo.svg';
import { Link } from "react-router-dom";


class Home extends React.Component {

    render(){
        return(
            <div>
          <h1>Main Login Page</h1>
          <li><Link to={'/signup'}>Login</Link></li>
          <li><Link to={'/signup'}>SignUp</Link></li>
          </div>
        )
    }
}

export default Home