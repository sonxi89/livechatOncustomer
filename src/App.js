import React from "react";
import { Layout } from "antd";
import Sidebar from "./Basic/Sidebar";
import InboxHeader from "./Basic/InboxHeader";
import ListContent from "./Basic/ListContent";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider
          width={65}
          style={{
            overflow: "auto",
            minHeight: "100vh",
            position: "fixed",
            left: "0",
          }}
        >
          <Sidebar />
        </Sider>
        <Layout>
          <Header
            style={{
              position: "fixed",
              zIndex: 1,
              width: "calc(100% - 65px)",
              backgroundColor: "#fff",
              right: "0",
              height: "55px",
              lineHeight: "55px",
              borderBottom: "1px solid rgba(9,30,66,.12)",
              padding: "0px 0px 0px 20px",
            }}
          >
            <InboxHeader />
          </Header>

          <Content>
            <Layout>
              <Sider
                style={{
                  height: "100vh",
                  backgroundColor: "#fff",
                  position: "relative",
                  left: "65px",
                  top: "55px",
                }}
              >
                <ListContent />
              </Sider>
              <Content>Content</Content>
            </Layout>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
