import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './components/App/App';
import todoApp from './reducers/reducers';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(todoApp);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
​