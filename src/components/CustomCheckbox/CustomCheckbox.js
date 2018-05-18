import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from "../../actions/actions";
import './CustomCheckbox.css';

const mapStateToProps = state => ({
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
});

class ConnectedCheckbox extends Component {
  constructor(props) {
    super(props);
    this.checkedClass = 'checked';
  }

  isChecked() {
    return this.props.id === this.props.visibilityFilter;
  }

  getClassName() {
    return this.isChecked() ? `custom-checkbox ${this.checkedClass}` : 'custom-checkbox';
  }

  render() {
    return (
      <div className={this.getClassName()} onClick={() => this.props.setVisibilityFilter(this.props.id)}>
        <input type="checkbox" defaultChecked={this.isChecked()} />
        <span className="radio" />
        <label>{this.props.label}</label>
      </div>
    );
  }
}

const CustomCheckbox = connect(mapStateToProps, mapDispatchToProps)(ConnectedCheckbox);

export default CustomCheckbox;