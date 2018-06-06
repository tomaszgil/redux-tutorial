import React, { Component } from 'react';
import { setSearchQuery } from '../actions/actions';
import { connect } from 'react-redux';
import SearchInput from '../components/SearchInput/SearchInput';

const mapStateToProps = state => ({
  searchQuery: state.searchQuery
});

const mapDispatchToProps = dispatch => ({
  setSearchQuery: query => dispatch(setSearchQuery(query))
});

const container = (props) => {
  return <SearchInput setSearchQuery={props.setSearchQuery} />;
};

const SearchInputConnected = connect(mapStateToProps, mapDispatchToProps)(container);

export default SearchInputConnected;