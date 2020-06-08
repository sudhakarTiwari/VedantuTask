import React from "react";
import "../Stylesheets/TabItem.css";

const TabItem = props => {
  const { label, active } = props;

  return (
    <div className={`tab-item ${active === label ? "active" : ""}`.trim()}>
      {label}
    </div>
  );
};

export default TabItem;
