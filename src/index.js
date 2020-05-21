import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './globalStyles';
import App from './App'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux';
import store from './_redux/store';

const Strict = () => (
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()
