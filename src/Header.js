import React from "react";
import "./App.scss";
import { Button, Input, Image } from "antd";
import {
  SearchOutlined,
  BellOutlined,
  GlobalOutlined,
  QuestionCircleOutlined,
  FacebookOutlined,
  InstagramOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const leftItemList = [
  "Kênh người bán",
  "Trở thành người bán Shopee",
  "Tải ứng dụng",
  "Kết nối",
  <FacebookOutlined style={{fontSize : '17px', marginLeft: '-5px'}} />,
  <InstagramOutlined style={{fontSize: '17px', marginLeft: '-5px'}} />,
];

const rightItemList = [
  {
    label: "Thông báo",
    icon: <BellOutlined />,
  },
  {
    label: "Hỗ Trợ",
    icon: <QuestionCircleOutlined />,
  },
  {
    label: "Tiếng Việt",
    icon: <GlobalOutlined />,
  },
  {
    label: "Đăng Ký",
  },
  {
    label: "Đăng nhập",
  },
];

const listSearch = [
  "Áo Khoác",
  "Áo Hoodie",
  "Dép",
  "Quần",
  "Bông tẩy trang",
  "Váy",
  "Tai nghe",
];

function Header() {
  return (
    <div className="header">
      <div className="grid">
        <div className="navbar">
          <ul className="navbar-container-list">
            {leftItemList.map((item, index) => (
              <li key={index} className="navbar-container-item item-hover">
                {item}
              </li>
            ))}
          </ul>

          <ul className="navbar-container-list">
            {rightItemList.map((item, index) => (
              <li key={index} className="navbar-container-item item-hover">
                {item.icon && item.icon}
                <span style={{ marginLeft: "5px" }}>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-search">
        <img
          className="logo-img"
          src="https://cf.shopee.vn/file/d734f6291f072bb855371432da462d65"
          alt=""
        />
        <div className="test">
          <Input
            suffix={
              <Button className="icon-search" icon={<SearchOutlined />} />
            }
            className="input-search"
            placeholder="P&G – Trúng vé máy bay 4 triệu"
          />
          <ul className="navbar-container-list">
            {listSearch.map((item, index) => (
              <li
                key={index}
                style={{ fontSize: "12px" }}
                className="navbar-container-item item-hover"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <ShoppingCartOutlined
          style={{
            fontSize: "30px",
            color: "white",
            marginLeft: "30px",
            marginBottom: "20px",
          }}
        />
      </div>
    </div>
  );
}

export default Header;
