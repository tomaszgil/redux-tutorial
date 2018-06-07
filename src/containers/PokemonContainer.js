import React from 'react';
import { connect } from 'react-redux';
import { togglePokemonCollected } from '../actions/actions';
import Pokemon from '../components/Pokemon/Pokemon';

const mapDispatchToProps = dispatch => ({
  onPokeballClick: id => dispatch(togglePokemonCollected(id))
});

const PokemonContainer = (props) => (
  <Pokemon {...props} />
);

export default connect(null, mapDispatchToProps)(PokemonContainer);