import React, { Component } from "react";
import PropTypes from "prop-types";

export class Note extends Component {
  state = {
    on: false
  };

  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  };

  switch = () => {
    this.setState({ on: !this.state.on });
    //this.props.callback(this.props.id);
  };

  render() {
    const { on } = this.state;
    const { x, y } = this.props;
    return <rect
      x={x}
      y={y}
      width="20"
      height="60"
      stroke="black"
      strokeWidth="5"
      fill={on?"black":"#ccc"}
      onClick={this.switch}
    />;
  }
}
