import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Menu.css';
import CustomCheckbox from './../CustomCheckbox/CustomCheckbox';
import VisibilityFilters from '../../utils/VisibilityFilters';
import { setSortDirection, setSortKey } from "../../actions/actions";

const mapDispatchToProps = dispatch => ({
  setSortKey: key => dispatch(setSortKey(key)),
  setSortDirection: direction => dispatch(setSortDirection(direction))
});

class ConnectedMenu extends Component {
  constructor(props) {
    super(props);

    this.filtersList = [
      VisibilityFilters.SHOW_ALL,
      VisibilityFilters.ONLY_COLLECTED,
      VisibilityFilters.NOT_COLLECTED
    ];

    this.sortingCategory = React.createRef();
    this.sortingDirection = React.createRef();
    this.handleSortKeyChange = this.handleSortKeyChange.bind(this);
    this.handleSortDirectionChange = this.handleSortDirectionChange.bind(this);
  }

  handleSortKeyChange() {
    const category = this.sortingCategory.current.value;
    console.log(category);
    this.props.setSortKey(category);
  }

  handleSortDirectionChange() {
    const direction = this.sortingDirection.current.value;
    this.props.setSortDirection(direction);
  }

  render() {
    return (
      <div className="menu">
        <form className="categories" onSubmit={(e) => e.preventDefault()}>
          {
            this.filtersList.map((label, index) => (
              <CustomCheckbox key={index} id={label} label={label} />
            ))
          }
        </form>
        <div className="sort-by">
          <div className="sorting-title">Sort by</div>
          <select className="sorting-category" ref={this.sortingCategory} onChange={this.handleSortKeyChange}>
            <option value="id">id</option>
            <option value="name">name</option>
            <option value="type">type</option>
          </select>
          <select className="sorting-direction" ref={this.sortingDirection} onChange={this.handleSortDirectionChange}>
            <option value="ascending">low to high</option>
            <option value="descending">high to low</option>
          </select>
        </div>
      </div>
    );
  }
}

const Menu = connect(null, mapDispatchToProps)(ConnectedMenu);

export default Menu;