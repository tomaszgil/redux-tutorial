import React from 'react';
import PropTypes from 'prop-types';
import './SearchResults.css';
import PokemonContainer from '../../containers/PokemonContainer';

const SearchResults = (props) => (
  <ul className="search-results">
    {
      props.pokemons
        .map(pokemon => (
          <PokemonContainer key={pokemon.id} {...pokemon} />
        ))
    }
  </ul>
);

SearchResults.propTypes = {
  pokemons: PropTypes.array.isRequired
};

export default SearchResults;