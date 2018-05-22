import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import pokedexReducer from '../reducers/reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
const store = createStoreWithMiddleware(pokedexReducer);

// TODO Debug purposes, remove later
window.store = store;

export default store;