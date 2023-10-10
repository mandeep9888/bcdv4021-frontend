import React from "react";
import { Component } from "react";

class Greeting extends Component {
  render() {
    return (
      <>
        <h2>{this.props.message}</h2>
      </>
    );
  }
}

export default Greeting;
