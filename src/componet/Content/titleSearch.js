import React, { Fragment } from "react";
import { getProfileByTitle } from "../../actions/profile";
import { Input } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const { Search } = Input;

const titleSearch = ({ getProfileByTitle }) => {
  return (
    <Fragment>
      <Search
        style={{ paddingTop: 20 }}
        placeholder="Search Title"
        enterButton="Title"
        size="default"
        onSearch={(value) => getProfileByTitle(value)}
      />
    </Fragment>
  );
};

titleSearch.propTypes = {
  getProfileByTitle: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { getProfileByTitle })(titleSearch);
