import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTypeFilter, removeTypeFilter } from "../../actions/actions";
import { PokemonTypes, PokemonTypesToColors } from "../../utils/Pokemon";
import './Filter.css';

const mapStateToProps = state => ({
  typeFilters: state.typeFilters
});

const mapDispatchToProps = dispatch => ({
  addTypeFilter: filter => dispatch(addTypeFilter(filter)),
  removeTypeFilter: filter => dispatch(removeTypeFilter(filter))
});

class ConnectedFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
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

    if (this.props.typeFilters.includes(filterName)) {
      this.props.removeTypeFilter(filterName);
      filterElement.classList.add('disabled');
    } else {
      this.props.addTypeFilter(filterName);
      filterElement.classList.remove('disabled');
    }
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

const Filter = connect(mapStateToProps, mapDispatchToProps)(ConnectedFilter);

export default Filter;