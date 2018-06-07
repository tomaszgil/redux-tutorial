import React from 'react';
import { connect } from 'react-redux';
import { setSortDirection, setSortKey } from "../actions/actions";
import { SortingDirection, SortingKey } from "../utils/SortingProperties";
import DropDown from "../components/DropDown/DropDown";
import SortPropertiesBox from "../components/SortPropertiesBox/SortPropertiesBox";

const mapDispatchToProps = dispatch => ({
  setSortKey: key => dispatch(setSortKey(key)),
  setSortDirection: direction => dispatch(setSortDirection(direction))
});

const mapStateToProps = state => ({
  sortKey: state.sortProperties.key,
  sortDirection: state.sortProperties.direction
});

const Container = (props) => (
  <SortPropertiesBox title='Sort by'>
    <DropDown
      selected={props.sortKey}
      options={[SortingKey.ID, SortingKey.NAME, SortingKey.TYPE]}
      onChange={props.setSortKey} />
    <DropDown
      selected={props.sortDirection}
      options={[SortingDirection.ASCENDING, SortingDirection.DESCENDING]}
      onChange={props.setSortDirection} />
  </SortPropertiesBox>
);

const SortPropertiesBoxConnected = connect(mapStateToProps, mapDispatchToProps)(Container);

export default SortPropertiesBoxConnected;