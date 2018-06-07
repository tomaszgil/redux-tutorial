import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import pokedexReducer from '../reducers/reducers';
import { saveData } from "../utils/localStorage";

const DEBUG_SETTINGS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const createStoreWithMiddleware = applyMiddleware(promise())(createStore);
const store = createStoreWithMiddleware(pokedexReducer, DEBUG_SETTINGS);

store.subscribe(() => {
  const collectedIDs = store.getState().pokemons
    .filter(pokemon => pokemon.collected)
    .map(pokemon => pokemon.id);

  saveData(collectedIDs);
});

export default store;