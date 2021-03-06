import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchEngine from '../utils/SearchEngine';
import Loader from '../components/Loader/Loader';
import SearchResults from '../components/SearchResults/SearchResults';

const mapStateToProps = state => ({
  searchQuery: state.searchQuery,
  visibilityFilter: state.visibilityFilter,
  typeFilters: state.typeFilters,
  sortProperties: state.sortProperties,
  pokemons: state.pokemons,
  isFetched: state.isFetched
});

class SearchResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.searchEngine = new SearchEngine(this.props.pokemons);
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

    this.searchEngine.setEntry(this.props.pokemons);
    return this.searchEngine.apply(criteria);
  }

  render() {
    if (!this.props.isFetched) return <Loader />;

    return <SearchResults pokemons={this.prepareResults()} />;
  }
}

export default connect(mapStateToProps)(SearchResultsContainer);