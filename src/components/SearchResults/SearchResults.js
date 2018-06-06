import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from '../Pokemon/Pokemon';
import './SearchResults.css';

const SearchResults = (props) => {
  return (
    <ul className="pokemon-container">
      {
        props.pokemons
          .map(pokemon => (
            <Pokemon key={pokemon.id} {...pokemon} />
          ))
      }
    </ul>
  );
};

SearchResults.propTypes = {
  pokemons: PropTypes.array
};

export default SearchResults;