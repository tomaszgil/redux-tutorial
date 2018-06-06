import React from 'react';
import { connect } from 'react-redux';
import './Menu.css';
import { setSortDirection, setSortKey } from "../../actions/actions";
import { SortingDirection, SortingKey } from "../../utils/SortingProperties";
import VisibilityFiltersBox from "../VisibilityFiltersBox/VisibilityFiltersBox";
import DropDown from "../DropDown/DropDown";

const mapDispatchToProps = dispatch => ({
  setSortKey: key => dispatch(setSortKey(key)),
  setSortDirection: direction => dispatch(setSortDirection(direction))
});

const mapStateToProps = state => ({
  sortKey: state.sortProperties.key,
  sortDirection: state.sortProperties.direction
});

const ConnectedMenu = (props) => (
  <div className="menu">
    <VisibilityFiltersBox />
    <div className="sort-by">
      <div className="sorting-title">Sort by</div>
      <DropDown
        className="sorting-category"
        selected={props.sortKey}
        options={[SortingKey.ID, SortingKey.NAME, SortingKey.TYPE]}
        onChange={props.setSortKey} />
      <DropDown
        className="sorting-direction"
        selected={props.sortDirection}
        options={[SortingDirection.ASCENDING, SortingDirection.DESCENDING]}
        onChange={props.setSortDirection} />
    </div>
  </div>
);

const Menu = connect(mapStateToProps, mapDispatchToProps)(ConnectedMenu);

export default Menu;