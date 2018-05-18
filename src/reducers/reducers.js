import { combineReducers } from 'redux';
import VisibilityFilters from '../_utils/VisibilityFilters';
import { PokemonTypes } from '../_utils/Pokemon';
import { SET_VISIBILITY_FILTER } from "../actions/actions";

const { SHOW_ALL } = VisibilityFilters;

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.visibilityFilter;
    default:
      return state;
  }
};

const typeFilters = (state = PokemonTypes, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.visibilityFilter;
    default:
      return state;
  }
};

const pokedexReducer = combineReducers({
  visibilityFilter,
  typeFilters
});

export default pokedexReducer;