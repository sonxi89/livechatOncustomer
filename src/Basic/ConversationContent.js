import React from "react";
import { Menu } from "antd";

const CONVERSATION_LIST = [
  {
    icon: "./img/1.png",
    name: "Nguyễn Thái Sơn",
    description: "đây là description của tôi",
  },
  {
    icon: "./img/2.png",
    name: "Nguyễn Tường Châu",
    description: "đây là description của tôi",
  },
  {
    icon: "./img/3.png",
    name: "Lâm Quốc Anh",
    description: "đây là description của tôi",
  },
  {
    icon: "./img/4.png",
    name: "Nguyễn Văn Bách",
    description: "đây là description của tôi",
  },
  {
    icon: "./img/5.png",
    name: "Nguyễn Thị Thanh Hằng",
    description: "đây là description của tôi",
  },
  {
    icon: "./img/6.png",
    name: "Nguyễn Thị Thu Thảo",
    description: "đây là description của tôi",
  },
  {
    icon: "./img/7.png",
    name: "Triệu Thanh Tùng",
    description: "đây là description của tôi",
  },
  {
    icon: "./img/8.png",
    name: "Nguyễn Thái Sơn",
    description: "đây là description của tôi",
  },
];

function ConversationContent() {
  return (
    <div
      style={{
        height: "calc(100vh - 55px - 56px)",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
      <Menu mode="vertical" theme="light">
        {CONVERSATION_LIST.map((item, index) => (
          <Menu.Item
            style={{
              height: "163.65px",
              borderBottom: "1px solid rgba(9,30,66,.12)",
              margin: "0",
              padding: "16px",
            }}
            key={index}
          >
            <div>
              <img
                src={item.icon}
                style={{ width: "32px", borderRadius: "100%" }}
                alt=""
              />
              <h1 style={{display: "inline-block", marginLeft: "10px"}}>{item.name}</h1>
            </div>
              <span>{item.description}</span>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}

export default ConversationContent;
