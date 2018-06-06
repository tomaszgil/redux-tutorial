import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchResults.css';
import PokemonConnected from '../../containers/PokemonConnected';

const SearchResults = (props) => (
  <ul className="pokemon-container">
    {
      props.pokemons
        .map(pokemon => (
          <PokemonConnected key={pokemon.id} {...pokemon} />
        ))
    }
  </ul>
);

SearchResults.propTypes = {
  pokemons: PropTypes.array.isRequired
};

export default SearchResults;