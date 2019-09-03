import React from 'react'
import Signin from './component/Signin.js'
import Album from './component/Dashboard.js'
import Checkout from './component/information'
import cardList from './component/list'
import ModalPage from './component/popUp'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import project from './reducer/Project';

const store = createStore(project)

class App extends React.Component {
  render () {
    return (
      // <Signin />
      <Provider store={store}>
        <Album />
      </Provider>
      // <Checkout />
      // <cardList />
      // <ModalPage />
    )
  }
}

export default App