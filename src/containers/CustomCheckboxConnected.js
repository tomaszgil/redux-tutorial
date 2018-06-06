import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from "../actions/actions";
import CustomCheckbox from "../components/CustomCheckbox/CustomCheckbox";

const mapStateToProps = state => ({
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  onClick: filter => dispatch(setVisibilityFilter(filter))
});

const Container = (props) => (
  <CustomCheckbox
    checked={props.id === props.visibilityFilter}
    onClick={props.onClick}
    {...props} />
);

const CustomCheckboxConnected = connect(mapStateToProps, mapDispatchToProps)(Container);

export default CustomCheckboxConnected;