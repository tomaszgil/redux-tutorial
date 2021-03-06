import { combineReducers } from 'redux';
import VisibilityFilters from '../utils/VisibilityFilters';
import { SortingKey, SortingDirection } from '../utils/SortingProperties';
import { PokemonTypes } from '../utils/Pokemon';
import {
  FETCH_POKEMONS_FULFILLED,
  SET_SEARCH_QUERY,
  SET_SORT_KEY,
  SET_SORT_DIRECTION,
  SET_VISIBILITY_FILTER,
  ADD_TYPE_FILTER,
  REMOVE_TYPE_FILTER,
  TOGGLE_POKEMON_COLLECTED
} from "../actions/actions";

const { SHOW_ALL } = VisibilityFilters;

const pokemons = (state = [], action) => {
  switch (action.type) {
    case FETCH_POKEMONS_FULFILLED:
      return action.payload;
    case TOGGLE_POKEMON_COLLECTED:
      const pokemon = state.find(el => el.id === action.id);
      const newPokemon = Object.assign({}, pokemon, {collected: !pokemon.collected});
      const index = state.indexOf(pokemon);
      return Object.assign([], state, {[index]: newPokemon});
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

const sortProperties = (state = { key: SortingKey.ID, direction: SortingDirection.ASCENDING }, action) => {
  switch (action.type) {
    case SET_SORT_KEY:
      return {
        key: action.sortKey,
        direction: state.direction
      };
    case SET_SORT_DIRECTION:
      return {
        key: state.key,
        direction: action.sortDirection
      };
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