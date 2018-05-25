import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import pokedexReducer from '../reducers/reducers';

const DEBUG_SETTINGS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const createStoreWithMiddleware = applyMiddleware(promise())(createStore);
const store = createStoreWithMiddleware(pokedexReducer, DEBUG_SETTINGS);

export default store;