import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from "../actions/actions";
import CustomCheckbox from "../components/CustomCheckbox/CustomCheckbox";
import VisibilityFiltersBox from "../components/VisibilityFiltersBox/VisibilityFiltersBox";
import VisibilityFilters from "../utils/VisibilityFilters";

const mapStateToProps = state => ({
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
});

const Container = (props) => {
  const filters = [
    VisibilityFilters.SHOW_ALL,
    VisibilityFilters.ONLY_COLLECTED,
    VisibilityFilters.NOT_COLLECTED
  ];

  return (
    <VisibilityFiltersBox >
      {
        filters.map(label => (
          <CustomCheckbox
            key={label}
            id={label}
            label={label}
            checked={label === props.visibilityFilter}
            onClick={props.setVisibilityFilter}
          />
        ))
      }
    </VisibilityFiltersBox>
  );
};

const VisibilityFiltersBoxConnected = connect(mapStateToProps, mapDispatchToProps)(Container);

export default VisibilityFiltersBoxConnected;