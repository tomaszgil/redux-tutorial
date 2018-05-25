import { combineReducers } from 'redux';
import VisibilityFilters from '../utils/VisibilityFilters';
import { PokemonTypes } from '../utils/Pokemon';
import {
  FETCH_POKEMONS_PENDING,
  FETCH_POKEMONS_FULFILLED,
  FETCH_POKEMONS_REJECTED,
  SET_SEARCH_QUERY,
  SET_SORT_KEY,
  SET_SORT_DIRECTION,
  SET_VISIBILITY_FILTER,
  ADD_TYPE_FILTER,
  REMOVE_TYPE_FILTER
} from "../actions/actions";

const { SHOW_ALL } = VisibilityFilters;

const pokemons = (state = [], action) => {
  switch (action.type) {
    case FETCH_POKEMONS_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};

const isFetched = (state = false, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_FULFILLED:
      return true;
    default:
      return state;
  }
};

const searchQuery = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return action.searchQuery;
    default:
      return state;
  }
};

// TODO initial sort properties constant
const sortProperties = (state = { key: 'id', direction: 'ascending' }, action) => {
  switch (action.type) {
    case SET_SORT_KEY:
      return action.sortKey;
    case SET_SORT_DIRECTION:
      return action.sortDirection;
    default:
      return state;
  }
};

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.visibilityFilter;
    default:
      return state;
  }
};

const typeFilters = (state = PokemonTypes, action) => {
  const newState = [...state];
  switch (action.type) {
    case ADD_TYPE_FILTER:
      newState.push(action.filter);
      break;
    case REMOVE_TYPE_FILTER:
      const index = state.indexOf(action.filter);
      newState.splice(index, 1);
      break;
    default:
      return state;
  }

  newState.sort();
  return newState;
};

const pokedexReducer = combineReducers({
  pokemons,
  isFetched,
  searchQuery,
  sortProperties,
  visibilityFilter,
  typeFilters
});

export default pokedexReducer;