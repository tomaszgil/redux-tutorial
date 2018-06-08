export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const FETCH_POKEMONS_PENDING = 'FETCH_POKEMONS_PENDING';
export const FETCH_POKEMONS_FULFILLED = 'FETCH_POKEMONS_FULFILLED';
export const FETCH_POKEMONS_REJECTED = 'FETCH_POKEMONS_REJECTED';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_SORT_KEY = 'SET_SORT_KEY';
export const SET_SORT_DIRECTION = 'SET_SORT_DIRECTION';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const ADD_TYPE_FILTER = 'ADD_TYPE_FILTERS';
export const REMOVE_TYPE_FILTER = 'REMOVE_TYPE_FILTERS';
export const TOGGLE_POKEMON_COLLECTED = 'TOGGLE_POKEMON_COLLECTED';

export const fetchPokemons = (promise) => ({
  type: FETCH_POKEMONS,
  payload: promise
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  searchQuery: query
});

export const setSortKey = (key) => ({
  type: SET_SORT_KEY,
  sortKey: key
});

export const setSortDirection = (direction) => ({
  type: SET_SORT_DIRECTION,
  sortDirection: direction
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  visibilityFilter: filter
});

export const addTypeFilter = (filter) => ({
  type: ADD_TYPE_FILTER,
  filter: filter
});

export const removeTypeFilter = (filter) => ({
  type: REMOVE_TYPE_FILTER,
  filter: filter
});

export const togglePokemonCollected = (id) => ({
  type: TOGGLE_POKEMON_COLLECTED,
  id: id
});