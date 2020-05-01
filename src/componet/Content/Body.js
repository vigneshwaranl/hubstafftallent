import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import Profiles from "./Profiles";
import SortBy from "./SortBy";
import SearchBar from "./SearchBar";
import CountrySearch from "./CountrySearch";
import ClearAllFilters from "./ClearAllFilters";
import AvailablityFilter from "./AvailablityFilter";
import TitleSearch from "./titleSearch";
import {  Row, Col, Card } from "antd";
const style = { padding: "8px 0" };

class Body extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div style={{ padding: "0px 64px 0px 64px" }}>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div style={style}>
                <ClearAllFilters />
                <AvailablityFilter />
                <CountrySearch />
                <TitleSearch />
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div className="site-card-border-less-wrapper">
                <Card bordered={false}>
                  <SortBy />
                  <Profiles />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}></div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Body;
