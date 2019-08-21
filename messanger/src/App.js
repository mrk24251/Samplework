import React from 'react'
import Login from './component/Login.js'
import Signup from './component/Signup.js'
import Profile from './component/Profile'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Massenger from './component/Massenger'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import conversation from './reducer/Conversation'

const store = createStore(conversation)

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path='/' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/profile' component={Profile} />
          <Route path='/massenger' component={Massenger} />
        </Router>
      </Provider>
    )
  }
}

export default App
