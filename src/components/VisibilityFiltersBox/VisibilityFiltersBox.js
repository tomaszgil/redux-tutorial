import React from 'react';
import PropTypes from 'prop-types';
import './VisibilityFiltersBox.css';

const VisibilityFiltersBox = (props) => (
  <form className="visibility-filters" onSubmit={(e) => e.preventDefault()}>
    {props.children}
  </form>
);

VisibilityFiltersBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default VisibilityFiltersBox;