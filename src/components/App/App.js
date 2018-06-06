import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Filter from '../Filter/Filter';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';
import { fetchPokemons } from "../../actions/actions";
import SearchInputConnected from "../../containers/SearchInputConnected";

const mapDispatchToProps = dispatch => ({
  fetchPokemons: pokemons => dispatch(fetchPokemons(pokemons))
});

class ConnectedApp extends Component {
  constructor(props) {
    super(props);

    this.apiAccessKey = "RZxUI6ohr3E8hmBGY6HDPlRWpXmVhzgh";

    this.state = {
      isFetched: false
    };
  }

  componentDidMount() {
    const promise = fetch(`https://api.mlab.com/api/1/databases/pokedex/collections/pokemons?apiKey=${this.apiAccessKey}`)
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
      <div className="app">
        <Logo />
        <SearchInputConnected />
        <Menu />
        <Filter />
        <SearchResults />
      </div>
    );
  }
}

const App = connect(null, mapDispatchToProps)(ConnectedApp);

export default App;
