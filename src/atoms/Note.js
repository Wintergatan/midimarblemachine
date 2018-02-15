import React, { Component } from "react";
import styled from "styled-components";

const Circle = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: block;
  margin: 20px auto;
  &:hover {
    cursor: pointer;
  }
`;

export class Note extends Component {
  state = {
    on: false
  };

  switch = () => this.setState({ on: !this.state.on });

  render() {
    const { on } = this.state;
    let color;
    if (on) {
      color = "green";
    } else {
      color = "blue";
    }
    return <Circle style={{ backgroundColor: color }} onClick={this.switch} />;
  }
}
