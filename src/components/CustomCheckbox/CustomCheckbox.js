import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CustomCheckbox.css';

class CustomCheckbox extends Component {
  constructor(props) {
    super(props);
    this.checkedClass = 'checked';
  }

  getClassName() {
    return this.props.checked ? `custom-checkbox ${this.checkedClass}` : 'custom-checkbox';
  }

  render() {
    return (
      <div className={this.getClassName()} onClick={() => this.props.onClick(this.props.id)}>
        <input type="checkbox" defaultChecked={this.props.checked} />
        <span className="radio" />
        <label>{this.props.label}</label>
      </div>
    );
  }
}

CustomCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CustomCheckbox;