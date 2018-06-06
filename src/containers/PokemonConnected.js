import React from 'react';
import { connect } from 'react-redux';
import { togglePokemonCollected } from '../actions/actions';
import Pokemon from '../components/Pokemon/Pokemon';

const mapDispatchToProps = dispatch => ({
  onPokeballClick: id => dispatch(togglePokemonCollected(id))
});

const Container = (props) => (
  <Pokemon {...props} />
);

const PokemonConnected = connect(null, mapDispatchToProps)(Container);

export default PokemonConnected;