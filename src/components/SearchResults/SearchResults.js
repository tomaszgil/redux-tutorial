import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pokemon from '../Pokemon/Pokemon';
import VisibilityFilters from '../../_utils/VisibilityFilters';
import './SearchResults.css';

const mapStateToProps = state => ({
  visibilityFilter: state.visibilityFilter
});

class SearchResultsConnected extends Component {
  constructor(props) {
    super(props);
    this.displayedPokemons = this.props.pokemons;
  }

  componentWillReceiveProps(nextProps) {
    this.updateResults(nextProps.pokemons);
  }

  updateResults(pokemons) {
    let result = [];
    switch (this.props.visibilityFilter) {
      case VisibilityFilters.SHOW_ALL: result = pokemons; break;
      case VisibilityFilters.ONLY_COLLECTED: result = pokemons.filter(el => el.collected); break;
      case VisibilityFilters.NOT_COLLECTED: result = pokemons.filter(el => !el.collected); break;
      default: result = pokemons; break;
    }

    this.displayedPokemons = result;
  }

  render() {
    if (!this.props.isFetched)
      return (
        <div className="pokemon-container-loading">
          <div className="pokemon" />
        </div>
      );

    return (
      <ul className="pokemon-container">
        {
          this.displayedPokemons
            .map(pokemon => <Pokemon key={pokemon.id} {...pokemon} onPokemonCheck={this.props.onPokemonCheck} />)
        }
      </ul>
    );
  }
}

const PokemonContainer = connect(mapStateToProps)(SearchResultsConnected);

export default PokemonContainer;