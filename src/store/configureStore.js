import { createStore } from "redux";
import pokedexReducer from '../reducers/reducers';

const store = createStore(pokedexReducer);

// Debug purposes
window.store = store;

export default store;