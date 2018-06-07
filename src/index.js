import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import AppConnected from "./containers/AppConnected";

ReactDOM.render(
  <Provider store={store}>
    <AppConnected />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();