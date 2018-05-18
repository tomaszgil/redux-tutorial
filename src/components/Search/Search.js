import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Filter from '../Filter/Filter';
import SearchInput from '../SearchInput/SearchInput';
import SearchResults from '../SearchResults/SearchResults';
import { PokemonTypes } from '../../_utils/Pokemon';

class Search extends Component {
  constructor(props) {
    super(props);
    this.allPokemons = this.props.pokemons;

    this.state = {
      pokemons: this.allPokemons
    };

    this.criteria = {
      searchQuery: '',
      sort: {
        key: 'id',
        direction: 'ascending'
      },
      filter: {
        types: PokemonTypes
      }
    };

    this.handleSorting = this.handleSorting.bind(this);
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handleFilterTypes = this.handleFilterTypes.bind(this);
    this.handlePokemonStateChange = this.handlePokemonStateChange.bind(this);
    this.sort = this.sort.bind(this);
    this.processSearchQuery = this.processSearchQuery.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  componentDidMount() {
    this.updateResults();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isFetched) {
      this.allPokemons = nextProps.pokemons;
      this.updateResults();
    }
  }

  handlePokemonStateChange(id) {
    const pokemon = this.allPokemons.find(pokemon => pokemon.id === id);
    pokemon.collected = !pokemon.collected;
  }

  handleSearchQuery(query) {
    this.criteria.searchQuery = query;
    this.updateResults();
  }

  handleFilterTypes(types) {
    this.criteria.filter.types = types;
    this.updateResults();
  }

  handleSorting(key, direction) {
    this.criteria.sort.key = key;
    this.criteria.sort.direction = direction;
    this.updateResults();
  }

  sort(arr) {
    let multiplier = 1;
    const key = this.criteria.sort.key;

    switch(this.criteria.sort.direction) {
      case 'ascending': multiplier = 1; break;
      case 'descending': multiplier = -1; break;
      default: break;
    }

    return arr.sort((a, b) => {
      if (a[key] < b[key]) return -1 * multiplier;
      if (a[key] === b[key]) return 0;
      if (a[key] > b[key]) return multiplier;

      return 0;
    });
  }

  processSearchQuery(arr) {
    const template = this.criteria.searchQuery.toLowerCase();
    const fields = ['name', 'type', 'id'];

    return arr.filter(pokemon => {
      for (let field of fields)
        if (pokemon[field].toString().toLowerCase().includes(template))
          return true;

      return false;
    });
  }

  applyFilters(arr) {
    return arr.filter(pokemon => this.criteria.filter.types.includes(pokemon.type));
  }

  updateResults() {
    let result = this.applyFilters(this.allPokemons);
        result = this.processSearchQuery(result);
        result = this.sort(result);

    this.setState({
      pokemons: result
    });
  }

  render() {
    return (
      <div>
        <SearchInput onChange={this.handleSearchQuery} />
        <Menu onSortChange={this.handleSorting} />
        <Filter onChange={this.handleFilterTypes} />
        <SearchResults pokemons={this.state.pokemons} isFetched={this.props.isFetched} onPokemonCheck={this.handlePokemonStateChange} />
      </div>
    );
  }
}


export default Search;