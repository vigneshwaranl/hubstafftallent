import React from "react";
import "antd/dist/antd.css";
import { Menu, Row, Col } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

class TopBar extends React.Component {
  render() {
    return (
      <Row>
        <Col span={18} push={6}>
          <Menu mode="horizontal">
            <Menu.Item key="howItWorks">HOW IT WORKS</Menu.Item>
            <SubMenu
              title={
                <>
                  BROWSE
                  <DownOutlined />
                </>
              }
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="search">SEARCH</Menu.Item>
            <Menu.Item key="myAccount">
              <UserOutlined />
              MY ACCOUNT
              <DownOutlined />
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={6} pull={18} style={{ background: "#ffffff" }}>
          <img
            height="21px"
            width="157px"
            alt=""
            src="https://d3e2zv1bbem3wj.cloudfront.net/assets/hubstaff/logos/Talent_logo-64c3146f73e3d729b2f0a01f1a73e07e04c8c33fa095dd69d6840abf637baccf.svg"
          />
        </Col>
      </Row>
    );
  }
}

export default TopBar;
