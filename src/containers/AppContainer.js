import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../components/Logo/Logo';
import Menu from '../components/Menu/Menu';
import { fetchPokemons } from '../actions/actions';
import SearchInputContainer from './SearchInputContainer';
import SearchResultsContainer from './SearchResultsContainer';
import FilterTrayContainer from "./FilterTrayContainer";
import SortPropertiesBoxContainer from "./SortPropertiesBoxContainer";
import App from "../components/App/App";
import VisibilityFiltersBoxContainer from "./VisibilityFiltersBoxContainer";

const mapDispatchToProps = dispatch => ({
  fetchPokemons: pokemons => dispatch(fetchPokemons(pokemons))
});

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.apiURL = 'https://api.mlab.com/api/1/databases/pokedex/collections/pokemons';
    this.apiKey = 'RZxUI6ohr3E8hmBGY6HDPlRWpXmVhzgh';
  }

  componentDidMount() {
    const promise = fetch(`${this.apiURL}?apiKey=${this.apiKey}`)
      .then(blob => blob.json())
      .then(data => {
        return data.map(element => ({
          name: element.name,
          id: element.id,
          img: element.image,
          type: element.types[0],
          collected: false
        }));
      });

    this.props.fetchPokemons(promise);
  }

  render() {
    return (
      <App>
        <Logo />
        <SearchInputContainer />
        <Menu>
          <VisibilityFiltersBoxContainer />
          <SortPropertiesBoxContainer />
        </Menu>
        <FilterTrayContainer />
        <SearchResultsContainer />
      </App>
    );
  }
}

export default connect(null, mapDispatchToProps)(AppContainer);
