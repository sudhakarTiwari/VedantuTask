import "../Stylesheets/RightPane.css";

import React from "react";
import TabHeader from "./TabHeader";
import Repos from "./Repos";

class Rightpane extends React.Component {
  state = {
    searchData: null
  };

  handleSearch = e => {
    const query = e.target.value;
  };

  render() {
    const { data } = this.props;
    const { searchData } = this.state;

    return (
      <div className="right-par">
        <div className="tabs">
          <TabHeader />
        </div>
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Find a repository..."
            onChange={this.handleSearch}
          />
        </div>
        <div className="repos-section">
          <Repos repos={searchData || data} />
        </div>
      </div>
    );
  }
}

export default Rightpane;
