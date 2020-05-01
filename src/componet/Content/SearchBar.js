import React, { Fragment } from "react";
import { getProfileBySearch } from "../../actions/profile";
import { Input } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const { Search } = Input;

const SearchBar = ({ getProfileBySearch, profile}) => {
  return (
    <Fragment>
      <Search
        style={{ padding: "12px 64px 12px 64px" }}
        placeholder="Search by keywords (PHP, .Net, graphic design etc.)"
        enterButton="Search"
        size="default"
        onSearch={(value) => getProfileBySearch(value)}
      />
    </Fragment>
  );
};

SearchBar.propTypes = {
  getProfileBySearch: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileBySearch })(SearchBar);
