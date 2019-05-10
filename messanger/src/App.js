import React from 'react'
import Login from './component/Login.js'
import Signup from './component/Signup.js'
import Profile from './component/Profile'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render () {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
      </Router>
    )
  }
}

export default App
