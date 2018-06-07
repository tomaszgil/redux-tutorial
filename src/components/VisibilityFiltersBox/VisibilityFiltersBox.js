import React from 'react';
import PropTypes from 'prop-types';
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import './VisibilityFiltersBox.css';

const VisibilityFiltersBox = (props) => (
  <form className="visibility-filters" onSubmit={(e) => e.preventDefault()}>
    {props.children}
  </form>
);

VisibilityFiltersBox.propTypes = {
  children: PropTypes.arrayOf(CustomCheckbox).isRequired
};

export default VisibilityFiltersBox;