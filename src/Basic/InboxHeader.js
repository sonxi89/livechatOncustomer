import React from "react";
import { Menu, Button, Input } from "antd";
import {
  PlusSquareOutlined,
  DownOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "./inbox-header.scss";

function InboxHeader() {
  return (
    <div>
      <div className="inbox-header">
        <span style={{ fontSize: "16px", fontWeight: "500", color: "#091e42" }}>
          Hộp thoại
        </span>

        <div className="left-header">
          <span className="margin-left-10">
            Bạn còn 600 ngày trải nghiệm, nâng cấp ngay
          </span>
          <Button
            style={{ color: "#3edb3e", borderColor: "#3edb3e" }}
            className="margin-left-10"
          >
            Nâng cấp
          </Button>
          <Button className="margin-left-10" icon={<PlusSquareOutlined />}>
            Mới
            <i style={{ fontSize: "10px", marginLeft: "3px" }}>
              <DownOutlined />
            </i>
          </Button>
          <Input
            className="input-header margin-left-10"
            placeholder="Tìm kiếm"
            prefix={<SearchOutlined />}
          />
          <img className="margin-left-15" src="./img/social.svg" />
          <img className="margin-left-15" src="./img/icon-phone-anser.svg" />
          <img
            className="margin-left-15"
            style={{ width: "20px" }}
            src="./img/notice.svg"
          />
          <img
            style={{ width: "20px", marginLeft: "15px" }}
            src="./img/icon-drag.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default InboxHeader;
