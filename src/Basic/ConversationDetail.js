import React from "react";
import "./conversation-list.scss";
import { DownOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Button } from "antd";

function ConversationDetailHeader() {
  return (
    <div className="header-conversation-detail">
      <div>
        <Button
          className="custom-button"
          style={{
            marginRight: "7px",
          }}
        >
          <img
            src="./img/icon-group.png"
            alt=""
            width="24"
            style={{ marginRight: "5px" }}
          />
          <h4
            style={{
              display: "inline-block",
              fontSize: "13",
              marginBottom: "0px",
            }}
          >
            Chọn Nhóm
          </h4>
          <DownOutlined style={{ fontSize: "9px", marginLeft: "5px" }} />
        </Button>
        <Button className="custom-button">
          <img
            src="./img/3.png"
            alt=""
            width="24"
            style={{ borderRadius: "100%", marginRight: "5px" }}
          />
          <h4
            style={{
              display: "inline-block",
              fontSize: "13",
              marginBottom: "0px",
            }}
          >
            Bạn
          </h4>
          <DownOutlined style={{ fontSize: "9px", marginLeft: "5px" }} />
        </Button>
      </div>

      <div>
        <img src="./img/icon-success.svg" alt="" width="32" />
        <CaretDownOutlined style={{ marginLeft: "10px" }} />
      </div>
    </div>
  );
}

export default ConversationDetailHeader;
