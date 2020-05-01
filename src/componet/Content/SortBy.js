import React, { Fragment } from "react";
import { sortByField } from "../../actions/profile";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { DownOutlined } from "@ant-design/icons";
import { Row, Col, Dropdown, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const SortBy = ({ sortByField }) => {
  const [sort, setSort] = React.useState(false);

  React.useEffect(() => {
    sortByField(sort ? "asc" : "dsc");
  }, [sortByField, sort]);
  
  const Menulist = (
    <Menu>
      <Menu.Item key="1" onClick=
      {() => setSort(!sort)}>
        <UserOutlined />
        Pay Rate Ascending
      </Menu.Item>
      <Menu.Item key="2">
        <UserOutlined />
        Pay Rate Descending
      </Menu.Item>
    </Menu>
  );

  return (
    <Fragment>
      <Row>
        <Col span={18} push={6}>
          <div style={{ float: "right" }}>
            <span style={{ padding: 4 }}>Sort By</span>
            <Dropdown overlay={Menulist}>
              <Button>
                Relevance <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        </Col>
        <Col span={6} pull={18}>
          <b>RESULTS </b>
        </Col>
      </Row>
    </Fragment>
  );
};

SortBy.propTypes = {
  sortByField: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { sortByField })(SortBy);
