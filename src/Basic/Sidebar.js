import React from "react";
import "./sidebar.scss";
import { Menu } from "antd";

const SIDEBAR_TOP_LIST = [
  {
    title: "Tổng quan",
    icon: "./img/icon-dashboard.png",
  },
  {
    title: "Inbox",
    icon: "./img/icon-inbox.png",
  },
  {
    title: "OnCustomer Live",
    icon: "./img/icon-live.png",
  },
  {
    title: "Khách hàng",
    icon: "./img/icon-people.png",
  },
];

const SIDEBAR_BOTTOM_LIST = [
  {
    title: "Cài đặt",
    icon: "./img/icon-setting.png",
  },
];

function Sidebar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Menu mode="vertical" theme="dark">
        <div className="logo"></div>
        {SIDEBAR_TOP_LIST.map((item, index) => (
          <Menu.Item className="menu-hover">
            <img src={item.icon} style={{ width: "18px" }} alt="" />
          </Menu.Item>
        ))}
      </Menu>

      <Menu mode="vertical" theme="dark">
        {SIDEBAR_BOTTOM_LIST.map((item, index) => (
          <Menu.Item className="menu-hover">
            <img className="icon-sidebar" src={item.icon} width={18} alt="" />
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}

export default Sidebar;
