import React from 'react';
import { setSearchQuery } from '../actions/actions';
import { connect } from 'react-redux';
import SearchInput from '../components/SearchInput/SearchInput';

const mapStateToProps = state => ({
  searchQuery: state.searchQuery
});

const mapDispatchToProps = dispatch => ({
  setSearchQuery: query => dispatch(setSearchQuery(query))
});

const SearchInputContainer = (props) => (
  <SearchInput setSearchQuery={props.setSearchQuery} searchQuery={props.searchQuery} />
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchInputContainer);