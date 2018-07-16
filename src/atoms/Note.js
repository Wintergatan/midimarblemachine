import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Rect = styled.rect`
  stroke-width: 3;
  stroke: black;
  &:hover {
    stroke: red;
    cursor: pointer;
  }
`;
export class Note extends Component {
  state = {
    trueValue: null
  };

  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    callback: PropTypes.func.isRequired,
    instrument: PropTypes.string.isRequired,
    instrumentGroup: PropTypes.string.isRequired,
    column: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    if (props.value !== false) {
      this.state.trueValue = props.value;
    } else {
      this.state.trueValue = true;
    }
  }

  render() {
    const {
      x,
      y,
      instrumentGroup,
      instrument,
      column,
      index,
      value,
      callback
    } = this.props;
    const { trueValue } = this.state;

    let newValue = false;

    if (value !== true && value === false) {
      newValue = trueValue;
    }

    return (
      <Rect
        x={x}
        y={y}
        width="20"
        height="60"
        stroke="black"
        strokeWidth="5"
        fill={value !== false ? "black" : "#ccc"}
        onClick={() => {
          callback(instrumentGroup, instrument, column - 1, index, newValue);
        }}
      />
    );
  }
}
