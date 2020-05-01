import React from "react";
import { Layout } from "antd";
import TopBar from "./componet/TopBar/TopBar";
import FooterContent from "./componet/Footer/Footer";
import Body from "./componet/Content/Body";
import "./App.css";
// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const { Header, Footer, Content } = Layout;

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
