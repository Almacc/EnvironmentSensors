import React from "react";
import { SidebarData } from "./sidebarData";

function SelectionBar() {
  return (
    <div className="selection-bar">
      {SidebarData.map((item, index) => (
        <div
          className="selection-item"
          style={{
            backgroundColor: "#44696e",
            transition: "background-color 0.3s ease",
          }}
          key={index}
          onClick={() => (window.location.pathname = item.link)}
        >
          <div className="icon">{item.icon}</div>
          <div className="title">{item.title}</div>
        </div>
      ))}
    </div>
  );
}

export default SelectionBar;