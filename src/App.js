import React from "react";
import { Layout } from "antd";
import Sidebar from "./Basic/Sidebar";
import InboxHeader from "./Basic/InboxHeader";
import ListContent from "./Basic/ListContent";
import ConversationHeader from "./Basic/ConversationHeader";
import ConversationContent from "./Basic/ConversationContent";
import ConversationDetailHeader from "./Basic/ConversationDetail";
import "./app.css";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider className="sider-inbox" width={65}>
          <Sidebar />
        </Sider>
        <Layout>
          <Header className="header-inbox">
            <InboxHeader />
          </Header>

          <Content>
            <Layout>
              <Sider>
                <ListContent />
              </Sider>
              <Sider width={298} className="back-color-white">
                <Header
                  style={{ height: "56px" }}
                  className="back-color-white padding-0"
                >
                  <ConversationHeader />
                </Header>

                <Content>
                  <ConversationContent />
                </Content>
              </Sider>
              <Content>
                <Header
                  style={{ height: "56px" }}
                  className="back-color-white padding-0"
                >
                  <ConversationDetailHeader />
                </Header>
                <Content></Content>
              </Content>
              <Sider className="back-color-white"> right sider</Sider>
            </Layout>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
