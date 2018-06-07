import React from 'react';
import CustomCheckboxConnected from "../../containers/CustomCheckboxConnected";
import VisibilityFilters from "../../utils/VisibilityFilters";
import './VisibilityFiltersBox.css';

const VisibilityFiltersBox = () => {
  const filtersList = [
    VisibilityFilters.SHOW_ALL,
    VisibilityFilters.ONLY_COLLECTED,
    VisibilityFilters.NOT_COLLECTED
  ];

  return (
    <form className="visibility-filters" onSubmit={(e) => e.preventDefault()}>
      {
        filtersList.map((label, index) => (
          <CustomCheckboxConnected key={index} id={label} label={label} />
        ))
      }
    </form>
  );
};

export default VisibilityFiltersBox;