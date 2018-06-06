import React from 'react';
import { connect } from 'react-redux';
import { addTypeFilter, removeTypeFilter } from "../actions/actions";
import FilterTray from "../components/FilterTray/FilterTray";

const mapStateToProps = state => ({
  filters: state.typeFilters
});

const mapDispatchToProps = dispatch => ({
  addFilter: filter => dispatch(addTypeFilter(filter)),
  removeFilter: filter => dispatch(removeTypeFilter(filter))
});

const Container = (props) => <FilterTray {...props} />;

const FilterTrayConnected = connect(mapStateToProps, mapDispatchToProps)(Container);

export default FilterTrayConnected;