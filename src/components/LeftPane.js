import React from "react";
import "../Stylesheets/LeftPane.css";

const Leftpane = props => {
  const { data } = props;
  console.log(data);

  return data ? (
    <div className="left-par">
      <div className="profile-pic">
        <img src={data.avatar_url} alt="Not found" />
      </div>
      <div>
        <div className="user-name">{data.name}</div>
        <div className="user-id">{data.login}</div>
      </div>
      <div>
        <button className="btn follow-btn">Follow</button>
      </div>
      <div className="user-bio">{data.bio}</div>
      <div className="user-company-details">
        <span>
          <i className="fas fa-building" />
          {data.company}
        </span>
        <span>
          <i className="fas fa-map-marker-alt" />
          {data.location}
        </span>
        <span>
          <i className="fas fa-envelope" />
          {data.email ? (
            <a href={data.email}>{data.email}</a>
          ) : (
            <a href="_" target="_blank">
              Sign in to view email
            </a>
          )}
        </span>
      </div>
    </div>
  ) : null;
};

export default Leftpane;
