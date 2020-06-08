import "../Stylesheets/RepoItem.css";
import React from "react";

const RepoItem = props => {
  const { data } = props;

  return (
    <div className="repo-item">
      <div className="repo-name">
        <a href={data.full_name}>{data.name}</a>
        <button className="btn star-btn">
          <i className="far fa-star" />
          Star
        </button>
      </div>
      {data.description && (
        <div className="repo-description">{data.description}</div>
      )}
    </div>
  );
};

export default RepoItem;
