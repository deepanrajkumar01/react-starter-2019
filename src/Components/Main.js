import React, { Component } from "react";
import axios from "axios";

class Main extends Component {
  state = {
    loading: true,
    response: {},
    error: ""
  };

  componentDidMount() {
    axios
      .get("/mockData")
      .then(response => {
        this.setState({
          response: response,
          loading: false
        });
      })
      .catch(errorMsg => {
        this.setState({
          error: errorMsg
        });
      });
  }

  render() {
    const { response, loading } = this.state;
    return loading ? (
      <div>Loading....</div>
    ) : (
      <div>
        <div className="new-world">!! Hello new world !!</div>
        <pre>{JSON.stringify(response, null, 4)}</pre>
      </div>
    );
  }
}

export default Main;
