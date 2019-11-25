// Default imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
//import * as serviceWorker from './serviceWorker';

// Redux imports and setup
/*
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combinedReducer from './reducers';

const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Debug help
)
*/

ReactDOM.render(<App />, document.getElementById('root'));