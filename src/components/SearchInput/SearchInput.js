import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchInput.css';


class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(e) {
    const query = e.target.value;
    this.props.setSearchQuery(query);
  }

  handleClear(e) {
    e.preventDefault();
    this.props.setSearchQuery('');
  }

  render() {
    return (
      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <div className="search-box">
          <input type="text" placeholder="Search" value={this.props.searchQuery} onChange={this.handleChange}/>
          <div className="icon" />
          <a href="#" className={this.props.searchQuery !== '' ? "clear visible" : "clear"}  onClick={this.handleClear} />
        </div>
      </form>
    );
  }
}

SearchInput.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func
};

export default SearchInput;