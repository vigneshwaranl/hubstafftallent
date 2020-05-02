import React, { Fragment,useEffect } from "react";
import { getProfileByCountry } from "../../actions/profile";
import { Input } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const { Search } = Input;

const CountrySearch = ({ getProfileByCountry, clearAll}) => {

  useEffect (() => {
    console.log(clearAll);
  },[clearAll])

  return (
    <Fragment>
      <Search
        placeholder="Search country name"
        enterButton="Search"
        size="default"
        onSearch={(value) => getProfileByCountry(value)}
      />
    </Fragment>
  );
};

CountrySearch.propTypes = {
  getProfileByCountry: PropTypes.func.isRequired,
  clearAll: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  clearAll : state.clearAll
});

export default connect(mapStateToProps, { getProfileByCountry })(CountrySearch);
