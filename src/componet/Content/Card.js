
import React from "react";
import {
  BuildOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import {
  Row,
  Card,
  Button,
  Tag,
  Typography
} from "antd";
import {Header} from "./Header";
import {getColor} from "../../utils/utils"

const { Text } = Typography;

export const CardInfo = ({ data }) => (
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
          Salary Min : <b>{data.salarymin}</b>
        </Text>
        <Text style={{ padding: 3 }}>
          Salary Max : <b>{data.salarymax}</b>
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
