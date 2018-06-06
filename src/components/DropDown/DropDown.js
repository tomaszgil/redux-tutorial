import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DropDown.css';

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.select = React.createRef();
  }

  handleSortKeyChange() {
    const category = this.select.current.value;
    this.props.onChange(category);
  }

  render() {
    return (
      <select
        value={this.props.selected}
        className={this.props.className}
        ref={this.select}
        onChange={() => this.handleSortKeyChange()}>
        {
          this.props.options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))
        }
      </select>
    );
  }
}

DropDown.propTypes = {
  className: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DropDown;