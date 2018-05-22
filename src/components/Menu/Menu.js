import React, { Component } from 'react';
import './Menu.css';
import CustomCheckbox from './../CustomCheckbox/CustomCheckbox';
import VisibilityFilters from '../../utils/VisibilityFilters';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.filtersList = [
      VisibilityFilters.SHOW_ALL,
      VisibilityFilters.ONLY_COLLECTED,
      VisibilityFilters.NOT_COLLECTED
    ];

    this.sortingCategory = React.createRef();
    this.sortingDirection = React.createRef();
    this.handleSortingOptionChange = this.handleSortingOptionChange.bind(this);
  }

  handleSortingOptionChange() {
    const category = this.sortingCategory.current.value;
    const direction = this.sortingDirection.current.value;
    this.props.onSortChange(category, direction);
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
          <select className="sorting-category" ref={this.sortingCategory} onChange={this.handleSortingOptionChange}>
            <option value="id">id</option>
            <option value="name">name</option>
            <option value="type">type</option>
          </select>
          <select className="sorting-direction" ref={this.sortingDirection} onChange={this.handleSortingOptionChange}>
            <option value="ascending">low to high</option>
            <option value="descending">high to low</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Menu;