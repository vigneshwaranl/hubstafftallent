import React, { Fragment } from "react";
import { getProfileByCountry } from "../../actions/profile";
import { Input } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const { Search } = Input;

const CountrySearch = ({ getProfileByCountry}) => {
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
  getProfileByCountry: PropTypes.func.isRequired
};

const mapStateToProps = () => ({
});

export default connect(mapStateToProps, { getProfileByCountry })(CountrySearch);
