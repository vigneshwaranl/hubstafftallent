import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const style = { color: "#f0f2f5", padding: "8px 0", alignItems: "left" };
const footerStyle = { background: "#324358", padding: "8px 0" };

class Footer extends React.Component {
  render() {
    return (
      <>
        <div style={footerStyle}>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div style={style}>
                <img
                  class="footer-brand"
                  src="https://d3e2zv1bbem3wj.cloudfront.net/assets/hubstaff/logos/Talent_white_text-0b2c861be0170602497e73f4c1c0dbe37e81c8a60c99db8832ebaf70127e9ddf.svg"
                  width="154"
                  height="21"
                  alt=""
                />
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>
                <text>TALENT</text>
                <br />
                <br />
                <text>How it works</text>
                <br />
                <br />
                <text>Why we're free</text>
                <br />
                <br />
                <text>Agencies</text>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>
                <text>HUBSTAFFF</text>
                <br />
                <br />
                <text>About</text>
                <br />
                <br />
                <text>Time tracking</text>
                <br />
                <br />
                <text>Developer</text>
                <br />
                <br />
                <text>Resources</text>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>
                <text>SOCIAL</text> <br />
                <TwitterOutlined />
                <FacebookOutlined />
                <InstagramOutlined />
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Footer;
