import React, { Component } from 'react';
import './Filter.css';
import { PokemonTypes, PokemonTypesToColors } from "../../_utils/Pokemon";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      typeFilters: new Set(PokemonTypes)
    };

    this.toggleFilter = this.toggleFilter.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  toggleFilter() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  applyFilter(e) {
    const filterElement = e.target;
    const filterName = filterElement.dataset.name;
    let newFilters = this.state.typeFilters;

    if (this.state.typeFilters.has(filterName)) {
      newFilters.delete(filterName);
      filterElement.classList.add('disabled');
    } else {
      newFilters.add(filterName);
      filterElement.classList.remove('disabled');
    }

    this.setState({
      typeFilters: newFilters
    });
    this.props.onChange(Array.from(newFilters));
  }

  render() {
    return (
      <div className="filter">
        <div className="toggle-filter" onClick={this.toggleFilter}>
          <span className="filter-icon" />
          <span className="filter-text">Filter Pokedex</span>
        </div>

        {this.state.showMenu &&
          <div className="filter-menu">
            <div className="types">
              <span className="category-title">Pokemon Type</span>
              <span className="category-items">
              {
                PokemonTypes.map(type => <div
                    key={type}
                    data-name={type}
                    style={{backgroundColor: PokemonTypesToColors[type], border: `2px solid ${PokemonTypesToColors[type]}`}}
                    onClick={this.applyFilter}>{type}
                  </div>)
              }
              </span>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Filter;