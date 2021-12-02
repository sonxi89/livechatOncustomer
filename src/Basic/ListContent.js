import React from "react";
import { Menu } from "antd";

const MENU_LIST = [
  {
    icon: "./img/1.png",
    name: "Thái Sơn",
    number: "10",
  },
  {
    icon: "./img/2.png",
    name: "Quốc Anh",
    number: "10",
  },
  {
    icon: "./img/3.png",
    name: "Tường Châu",
    number: "10",
  },
  {
    icon: "./img/4.png",
    name: "Bach Nguyen",
    number: "9",
  },
  {
    icon: "./img/5.png",
    name: "Thanh Hang",
    number: "9",
  },
  {
    icon: "./img/6.png",
    name: "Thanh Hang",
    number: "9",
  },
  {
    icon: "./img/7.png",
    name: "Thanh Hang",
    number: "9",
  },
  {
    icon: "./img/8.png",
    name: "Thanh Hang",
    number: "9",
  },
  {
    icon: "./img/9.png",
    name: "Thanh Hang",
    number: "9",
  },

  {
    icon: "./img/10.png",
    name: "Thanh Hang",
    number: "9",
  },
  {
    icon: "./img/10.png",
    name: "Thanh Hang",
    number: "9",
  },
  {
    icon: "./img/10.png",
    name: "Thanh Hang",
    number: "9",
  },
  {
    icon: "./img/10.png",
    name: "Thanh Hang",
    number: "9",
  },
  {
    icon: "./img/10.png",
    name: "Thanh Hang",
    number: "9",
  },
  {
    icon: "./img/10.png",
    name: "Thanh Hang",
    number: "9",
  },
  {
    icon: "./img/10.png",
    name: "Thanh Hang",
    number: "9",
  },
  {
    icon: "./img/10.png",
    name: "Thanh Hang",
    number: "9",
  },
  {
    icon: "./img/10.png",
    name: "Thanh Hang",
    number: "9",
  },
];

function ListContent() {
  return (
    <div>
      <Menu mode="vertical" theme="light">
        {MENU_LIST.map((item, index) => (
          <Menu.Item key={index}>
            <img
              src={item.icon}
              style={{ width: "20px", borderRadius: "100%" }}
            />
            <div style={{ display: "inline-block", marginLeft: "10px" }}>
              <span style={{ display: "inline-block", width: "100px" }}>
                {item.name}
              </span>
              <span>{item.number}</span>
            </div>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}

export default ListContent;
