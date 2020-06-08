import React, { Component } from "react";
import "./style.css";
import Leftpane from "./components/LeftPane";
import Rightpane from "./components/RightPane";

class App extends Component {
  state = {
    isLoading: false,
    profile: null,
    repositories: null
  };

  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      this.getData();
    });
  }

  getData = () => {
    let self = this;
    const profile_url = "https://api.github.com/users/supreetsingh247";
    const repos_url = "https://api.github.com/users/supreetsingh247/repos";

    fetch(profile_url)
      .then(res => res.json())
      .then(profile_data => {
        self.setState({
          profile: profile_data
        });
      })
      .then(() => {
        fetch(repos_url)
          .then(response => response.json())
          .then(repos_data => {
            self.setState({
              isLoading: false,
              repositories: repos_data
            });
          });
      });
  };

  render() {
    const { isLoading, profile, repositories } = this.state;

    return (
      <div className="App">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <React.Fragment>
            <Leftpane data={profile} />
            <Rightpane data={repositories} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
