import React, { Fragment } from "react";
import { getProfiles } from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col, Button } from "antd";

const ClearAllFilters = ({ getProfiles, profile }) => {
  return (
    <Fragment>
      <Row type="flex" justify="space-between">
        <Col span={18} push={6}>
          <div style={{ float: "right" }}>
            <Button type="link" onClick={getProfiles}>
              Clear all filters
            </Button>
          </div>
        </Col>
        <Col span={6} pull={18}>
          <div style={{ float: "left" }}>
            <b>FILTERS </b>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

ClearAllFilters.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(ClearAllFilters);
