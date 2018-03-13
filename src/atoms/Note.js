import React, { Component } from "react";
import styled from "styled-components";

const Circle = styled.div`
  border: 1px solid black;
  width: 20px;
  height: 60px;
  display: block;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export class Note extends Component {
  state = {
    on: false
  };

  switch = () => {
    this.setState({ on: !this.state.on });
    //this.props.callback(this.props.id);
  };

  render() {
    const { on } = this.state;
    let color;
    if (on) {
      color = "black";
    } else {
      color = "#cccc";
    }
    return <Circle style={{ backgroundColor: color }} onClick={this.switch} />;
  }
}
