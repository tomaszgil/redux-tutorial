import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../components/Logo/Logo';
import Menu from '../components/Menu/Menu';
import { fetchPokemons } from '../actions/actions';
import SearchInputConnected from './SearchInputConnected';
import SearchResultsConnected from './SearchResultsConnected';
import FilterTrayConnected from "./FilterTrayConnected";
import SortPropertiesBoxConnected from "./SortPropertiesBoxConnected";
import App from "../components/App/App";
import VisibilityFiltersBoxConnected from "./VisibilityFiltersBoxConnected";

const mapDispatchToProps = dispatch => ({
  fetchPokemons: pokemons => dispatch(fetchPokemons(pokemons))
});

class Container extends Component {
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
        <SearchInputConnected />
        <Menu>
          <VisibilityFiltersBoxConnected />
          <SortPropertiesBoxConnected />
        </Menu>
        <FilterTrayConnected />
        <SearchResultsConnected />
      </App>
    );
  }
}

const AppConnected = connect(null, mapDispatchToProps)(Container);

export default AppConnected;
