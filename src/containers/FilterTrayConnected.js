import React from 'react';
import { connect } from 'react-redux';
import { addTypeFilter, removeTypeFilter } from "../actions/actions";
import FilterTray from "../components/FilterTray/FilterTray";
import { PokemonTypes, PokemonTypesToColors } from "../utils/Pokemon";

const mapStateToProps = state => ({
  filters: state.typeFilters
});

const mapDispatchToProps = dispatch => ({
  addFilter: filter => dispatch(addTypeFilter(filter)),
  removeFilter: filter => dispatch(removeTypeFilter(filter))
});

const Container = (props) => (
  <FilterTray {...props} allFilters={PokemonTypes} colorMap={PokemonTypesToColors} />
);

const FilterTrayConnected = connect(mapStateToProps, mapDispatchToProps)(Container);

export default FilterTrayConnected;