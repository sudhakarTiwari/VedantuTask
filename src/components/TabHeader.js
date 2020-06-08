import React from "react";
import "../Stylesheets/TabHeader.css";
import TabItem from "./TabItem";

const TabHeader = () => {
  const TABS = [
    "Overview",
    "Repositories",
    "Projects",
    "Stars",
    "Followers",
    "Following"
  ];

  return (
    <div className="tab-header">
      {TABS.map((item, index) => {
        return <TabItem key={index} active="Repositories" label={item} />;
      })}
    </div>
  );
};

export default TabHeader;
