import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pokemon from '../Pokemon/Pokemon';
import './SearchResults.css';
import SearchEngine from "../../utils/SearchEngine";
import Loader from "../Loader/Loader";

const mapStateToProps = state => ({
  searchQuery: state.searchQuery,
  visibilityFilter: state.visibilityFilter,
  typeFilters: state.typeFilters,
  sortProperties: state.sortProperties,
  pokemons: state.pokemons,
  isFetched: state.isFetched
});

class SearchResultsConnected extends Component {
  constructor(props) {
    super(props);
  }

  prepareResults() {
    const criteria = {
      searchQuery: this.props.searchQuery,
      sort: {
        key: this.props.sortProperties.key,
        direction: this.props.sortProperties.direction
      },
      typeFilters: this.props.typeFilters,
      visibilityFilter: this.props.visibilityFilter
    };

    const searchEngine = new SearchEngine(this.props.pokemons);
    return searchEngine.apply(criteria);
  }

  render() {
    if (!this.props.isFetched)
      return <Loader />;

    const pokemons = this.prepareResults();
    return (
      <ul className="pokemon-container">
        {
          pokemons
            .map(pokemon => (
              <Pokemon key={pokemon.id} {...pokemon} />
            ))
        }
      </ul>
    );
  }
}

const PokemonContainer = connect(mapStateToProps)(SearchResultsConnected);

export default PokemonContainer;