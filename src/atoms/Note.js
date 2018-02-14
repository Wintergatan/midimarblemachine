import React, { Component } from "react";
import PropTypes from "prop-types";

export class Note extends Component {
  static propTypes = {
    type: PropTypes.string,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    radius: PropTypes.number
  };

  static defaultProps = {
    type: "round",
    radius: 4
  };

  render() {
    const { x, y, radius } = this.props;
    return (
      <circle
        cx={x}
        cy={y}
        r={radius}
        stroke="black"
        stroke-idth="3"
        fill="red"
      />
    );
  }
}
