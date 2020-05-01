import React, { Fragment, useEffect } from "react";
import { getProfileBySearch, getProfiles } from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Checkbox } from "antd";

const AvailablityFilter = ({ getProfiles, getProfileBySearch, clearAll }) => {
  const [fullTime, setFullTime] = React.useState(false);
  const [partTime, setPartTime] = React.useState(false);

  useEffect(() => {
    setPartTime(false);
    setFullTime(false);
  }, [clearAll]);

  useEffect(() => {
    if ((fullTime && partTime) || (!fullTime && !partTime)) {
      getProfiles();
    } else {
      getProfileBySearch(fullTime ? "Full Time" : "Part Time");
    }
  }, [getProfiles, getProfileBySearch, partTime, fullTime]);

  return (
    <Fragment>
      <p style={{ marginBottom: "20px", float: "left" }}>
        <Checkbox
          name="fullTime"
          checked={fullTime}
          onChange={() => setFullTime(!fullTime)}
        >
          Full Time
        </Checkbox>
      </p>
      <p style={{ marginBottom: "20px" }}>
        <Checkbox
          name="partTime"
          checked={partTime}
          onChange={() => setPartTime(!partTime)}
        >
          Part Time
        </Checkbox>
      </p>
    </Fragment>
  );
};

AvailablityFilter.propTypes = {
  filterAvailablity: PropTypes.func.isRequired,
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  clearAll: state.clearAll,
});

export default connect(mapStateToProps, { getProfileBySearch, getProfiles })(
  AvailablityFilter
);
