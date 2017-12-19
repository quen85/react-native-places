import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  updateFilter
} from "../../../redux/actions/places";
import Component from "../components";
import { getVisiblePlaces } from "../../../redux/selectors/places";

function mapDispatchToProps(dispatch) {
  return {
    updateFilter: value => {
      dispatch(updateFilter(value));
    }
  };
}

function mapStateToProps(state) {
  return {
    places: getVisiblePlaces(state),
    selected: state.placesFilter
  };
}

const FiltersContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Component);
export default FiltersContainer;
