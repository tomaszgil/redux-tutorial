import React from 'react';
import './SortPropertiesBox.css';
import PropTypes from 'prop-types';
import DropDown from "../DropDown/DropDown";

const SortPropertiesBox = (props) => (
  <div className="sort-by">
    <div className="sorting-title">{props.title}</div>
    {props.children}
  </div>
);

SortPropertiesBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default SortPropertiesBox;