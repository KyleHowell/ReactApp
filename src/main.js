import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App name="Kyle's App" />
  </Provider>,
  document.getElementById('root')
);
