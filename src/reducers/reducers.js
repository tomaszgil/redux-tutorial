import { combineReducers } from 'redux'

import {
  SET_VISIBILITY_FILTER,
} from '../actions/actions.js';

import Filters from '../_utils/Filters';

const { SHOW_ALL } = Filters;
​
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
​
const pokedexApp = combineReducers({
  visibilityFilter: visibilityFilter
});
​
export default pokedexApp;
