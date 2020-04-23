import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import axios from "axios";
import EditableTagGroup from "./EditableTagGroup";
import { apiURL } from "../../config/config";
import {
  DownOutlined,
  UserOutlined,
  BuildOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import {
  Checkbox,
  Row,
  Col,
  Card,
  Input,
  Menu,
  Dropdown,
  Button,
  message,
  Tag,
  Pagination,
  Typography,
} from "antd";
const style = { padding: "8px 0" };
const { Search } = Input;
const { Text } = Typography;

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <UserOutlined />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      <UserOutlined />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <UserOutlined />
      3rd item
    </Menu.Item>
  </Menu>
);

const Header = ({ children }) => (
  <span
    style={{
      fontWeight: "bold",
      fontSize: "1em",
      color: "#555",
      margin: 0,
      marginRight: 40,
    }}
  >
    {children}
  </span>
);

function getColor(key) {
  switch (key) {
    case "Full Time":
      return "green";
    case "Part Time":
      return "orange";
    default:
      break;
  }
}

const Info = ({ data }) => (
  <Row type="flex" justify="space-between">
    <Card className="card" style={{ display: "inline-block", margin: 10 }}>
      <Row type="flex" justify="space-between" align="middle">
        <Header>{data.title}</Header>
        <Tag color={getColor(data.jobType)} className="round">
          {data.jobType}
        </Tag>
      </Row>
      <Row type="flex">
        <BuildOutlined />
        <Text style={{ color: "blue", padding: 3 }}>Epic Coders</Text>
        <EnvironmentOutlined />
        <Text style={{ opacity: 0.5, padding: 3 }}> {data.location}</Text>
      </Row>
      <Row type="flex">
        <Text style={{ padding: 3 }}>
          Reply rate : <b>82%</b>
        </Text>
      </Row>
      <Row type="flex" justify="flex-start">
        <Text style={{ padding: 3 }}>{data.desciption}</Text>
      </Row>
      <Row type="flex">
        {data.requiredSkills.split(",").map((item) => (
          <Button size="small" className="round">
            {item}
          </Button>
        ))}
      </Row>
    </Card>
  </Row>
);

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

class Body extends React.Component {
  state = {
    data: [],
    minValue: 0,
    maxValue: 4,
    numEachPage: 5,
    partTime: false,
    fullTime: false,
  };

  handleChange = (value) => {
    this.setState({
      minValue: (value - 1) * this.state.numEachPage,
      maxValue: value * this.state.numEachPage,
    });
  };

  globaleSearch = (value) => {
    axios.get(apiURL + "jobdescriptions/search?query=" + value).then((res) => {
      this.setState({ data: res.data });
    });
  };

  availablitySearch = (value) => {
    if (value === "fullTime") value = "Full";
    else value = "Part";
    axios
      .get(apiURL + "jobdescriptions/search?job_type=" + value)
      .then((res) => {
        this.setState({ data: res.data });
      });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
    if (this.state.partTime && this.state.fullTime) this.getAllData();
    else this.availablitySearch(e.target.name);
  };

  clearAvailablity = () => {
    this.getAllData();
    this.setState({ partTime: false, fullTime: false });
  };

  getAllData = () => {
    axios.get(apiURL + "jobdescriptions").then((res) => {
      this.setState({ data: res.data });
    });
  };

  componentDidMount() {
    this.getAllData();
  }
  render() {
    const { data, minValue, maxValue, numEachPage } = this.state;
    return (
      <div>
        <Search
          style={{ padding: "12px 64px 12px 64px" }}
          placeholder="Search by keywords (PHP, .Net, graphic design etc.)"
          enterButton="Search"
          size="default"
          onSearch={(value) => this.globaleSearch(value)}
        />
        <div style={{ padding: "0px 64px 0px 64px" }}>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div style={style}>
                <Row type="flex" justify="space-between">
                  <Col span={18} push={6}>
                    <div style={{ float: "right" }}>
                      <Button type="link" onClick={this.clearAvailablity}>Clear all filters</Button>
                    </div>
                  </Col>
                  <Col span={6} pull={18}>
                    <div style={{ float: "left" }}>
                      <b>FILTERS </b>
                    </div>
                  </Col>
                </Row>
                <Row type="flex" justify="space-between">
                  <Col span={18} push={6}>
                    <div style={{ float: "right" }}>
                      <Button type="link">Clear</Button>
                    </div>
                  </Col>
                  <Col span={6} pull={18}>
                    <div style={{ float: "left" }}>
                      <b>Skills </b>
                    </div>
                  </Col>
                  <Card bordered={false}>
                    <EditableTagGroup />
                  </Card>
                </Row>
                <Row type="flex" justify="space-between">
                  <Col span={18} push={6}>
                    <div style={{ float: "right" }}>
                      <Button type="link" onClick={this.clearAvailablity}>
                        Clear
                      </Button>
                    </div>
                  </Col>
                  <Col span={6} pull={18}>
                    <div style={{ float: "left" }}>
                      <b>Availablity </b>
                    </div>
                  </Col>
                </Row>
                <p style={{ marginBottom: "20px", float: "left" }}>
                  <Checkbox
                    name="fullTime"
                    checked={this.state.fullTime}
                    onChange={this.onChange}
                  >
                    Full Time
                  </Checkbox>
                </p>
                <p style={{ marginBottom: "20px" }}>
                  <Checkbox
                    name="partTime"
                    checked={this.state.partTime}
                    onChange={this.onChange}
                  >
                    Part Time
                  </Checkbox>
                </p>
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div className="site-card-border-less-wrapper">
                <Card bordered={false}>
                  <Row>
                    <Col span={18} push={6}>
                      <div style={{ float: "right" }}>
                        <span style={{ padding: 4 }}>Sort By</span>
                        <Dropdown overlay={menu}>
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
                  {data &&
                    data.length > 0 &&
                    data
                      .slice(minValue, maxValue)
                      .map((item) => <Info key={item.key} data={item} />)}
                  <Pagination
                    total={data.length}
                    onChange={this.handleChange}
                    defaultPageSize={numEachPage}
                  />
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
