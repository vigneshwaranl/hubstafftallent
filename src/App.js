import React from "react";
import { Layout } from "antd";
import TopBar from "./componet/TopBar/TopBar";
import FooterContent from "./componet/Footer/Footer";
import Body from "./componet/Content/Body";
import "./App.css";

function App() {
  const { Header, Footer, Content } = Layout;

  return (
    <div className="App">
      <Layout>
        <Header>
          <TopBar />
        </Header>
        <Content>
          <Body />
        </Content>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
