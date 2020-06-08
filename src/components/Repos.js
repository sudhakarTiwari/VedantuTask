import React from "react";
import RepoItem from "./RepoItem";

const Repos = props => {
  const { repos } = props;

  const repoItem =
    !!repos &&
    repos.map((repo, index) => {
      return <RepoItem data={repo} />;
    });

  return repos ? <div className="repos">{repoItem}</div> : null;
};

export default Repos;
