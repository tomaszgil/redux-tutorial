import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PokemonTypes, PokemonTypesToColors } from "../../utils/Pokemon";
import './FilterTray.css';

class FilterTray extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };
  }

  toggleFilter() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  applyFilter(e) {
    const filterElement = e.target;
    const filterName = filterElement.dataset.name;

    if (this.props.filters.includes(filterName))
      this.props.removeFilter(filterName);
    else
      this.props.addFilter(filterName);
  }

  render() {
    return (
      <div className="filter">
        <div className="toggle-filter" onClick={() => this.toggleFilter()}>
          <span className="filter-icon" />
          <span className="filter-text">Filter Pokedex</span>
        </div>

        {this.state.showMenu &&
          <div className="filter-menu">
            <div className="types">
              <span className="category-title">Pokemon Type</span>
              <span className="category-items">
              {
                PokemonTypes.map(type => (
                  <div
                    key={type}
                    data-name={type}
                    className={this.props.filters.includes(type) ? null : 'disabled'}
                    style={{backgroundColor: PokemonTypesToColors[type], border: `2px solid ${PokemonTypesToColors[type]}`}}
                    onClick={(e) => this.applyFilter(e)}>{type}
                  </div>
                ))
              }
              </span>
            </div>
          </div>
        }
      </div>
    );
  }
}

FilterTray.propTypes = {
  filters: PropTypes.array,
  addFilter: PropTypes.func,
  removeFilter: PropTypes.func
};

export default FilterTray;