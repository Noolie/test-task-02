import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './components/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import allReducers from './reducers';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subscribe(()=>{
//   console.log('subscribe', store.getState());
// })

/*** YOU MAY CHANGE DEFAULT STATE OF LOGIN IN reducer-login.js FROM 'null' TO 'user' OR 'admin' ***/

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <MuiThemeProvider>
        <Route path='/' component={App} />
      </MuiThemeProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('root'));
