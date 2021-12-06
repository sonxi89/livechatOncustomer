import React from "react";
import "./conversation-list.scss";
import { DownOutlined } from '@ant-design/icons';
import { Menu } from "antd";



function ConversationHeader() {
  return (
    <div>
     <div className="header-conversation">
       <div>
         <img style={{margin: "0px 10px"}} src="./img/icon-open.png" alt="" width={16} />
         <span>Đang mở</span>
         <DownOutlined style={{fontSize: "9px", marginLeft: "12px"}}  /> 
       </div>

       <div>
         <span>Mới</span>
         <DownOutlined style={{fontSize: "9px", margin: "0px 10px 0px 12px"}} /> 
       </div>
     </div>
    </div>
  );
}

export default ConversationHeader;
