import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
                this.props.allFilters.map(type => (
                  <div
                    key={type}
                    data-name={type}
                    className={this.props.filters.includes(type) ? null : 'disabled'}
                    style={{backgroundColor: this.props.colorMap[type], border: `2px solid ${this.props.colorMap[type]}`}}
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
  filters: PropTypes.array.isRequired,
  allFilters: PropTypes.array.isRequired,
  addFilter: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired,
  colorMap: PropTypes.object
};

export default FilterTray;