import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Note } from "../atoms/Note";

const SurroundingRectangle = styled.rect`
  stroke-width: 3;
  stroke: rgb(0, 0, 0);
  fill: none;
`;

const InstrumentText = styled.text`
  fill: black;
`;

function getColumns(instrument, lane, callback, group, name) {
  const width = 240;
  const height = 500;
  const horizontalSpacing = 30;

  const column1x = 0;
  const column2x = horizontalSpacing;
  const column3x = 2 * horizontalSpacing;
  const column4x = 20 + 3 * horizontalSpacing;
  const column5x = 20 + 4 * horizontalSpacing;
  const column6x = 20 + 5 * horizontalSpacing;
  const verticalSpacing = height / 4;
  const offset = verticalSpacing / 2;
  const column3spacing = height / 3;

  const column1 = instrument[0].map((value, index) => {
    return (
      <Note
        key={name + "column1" + index}
        instrumentGroup={group}
        instrument={name}
        column={1}
        index={index}
        x={column1x}
        y={offset + index * verticalSpacing}
        value={value}
        callback={callback}
      />
    );
  });

  const column2 = instrument[1].map((value, index) => {
    return (
      <Note
        key={name + "column2" + index}
        instrumentGroup={group}
        instrument={name}
        column={2}
        index={index}
        x={column2x}
        y={index * verticalSpacing}
        value={value}
        callback={callback}
      />
    );
  });

  const column3 = instrument[2].map((value, index) => {
    return (
      <Note
        key={name + "column3" + index}
        instrumentGroup={group}
        instrument={name}
        column={3}
        index={index}
        x={column3x}
        y={
          (index + 1) * column3spacing + Math.floor(index / 2) * column3spacing
        }
        value={value}
        callback={callback}
      />
    );
  });

  const column4 = instrument[3].map((value, index) => {
    return (
      <Note
        key={name + "column4" + index}
        instrumentGroup={group}
        instrument={name}
        column={4}
        index={index}
        x={column4x}
        y={offset + index * verticalSpacing}
        value={value}
        callback={callback}
      />
    );
  });

  const column5 = instrument[4]
    .map((value, index) => {
      return (
        <Note
          key={name + "column5" + index}
          instrumentGroup={group}
          instrument={name}
          column={5}
          index={index}
          x={column5x}
          y={index * verticalSpacing}
          value={value}
          callback={callback}
        />
      );
    })
    .filter(v => v !== false);

  const column6 = instrument[5]
    .map((value, index) => {
      return (
        <Note
          key={name + "column6" + index}
          instrumentGroup={group}
          instrument={name}
          column={6}
          index={index}
          x={column6x}
          y={
            (index + 1) * column3spacing +
            Math.floor(index / 2) * column3spacing
          }
          value={value}
          callback={callback}
        />
      );
    })
    .filter(v => v !== false);

  // const surroundingRectangle = new MakerJs.models.Rectangle(54, height);
  // const surroundingRectangles = [0, 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map(i => {
  const surroundingRectangles = new Array(64).fill(false).map((_, i) => {
    return (
      <SurroundingRectangle
        key={group + name + "surroundingRectangle" + i}
        width={190}
        height={height}
        y={height * i}
      />
    );
  });
  const title = (
    <InstrumentText key={group + name + "title"} x={0} y={-5}>
      {group + " " + name}
    </InstrumentText>
  );
  return (
    <g key={group + name} transform={`translate(${lane * width},20.5)`}>
      {[
        ...column1,
        ...column2,
        ...column3,
        ...column4,
        ...column5,
        ...column6,
        ...surroundingRectangles,
        title
      ]}
    </g>
  );
}

export default class Instrument extends Component {
  static propTypes = {
    instrument: PropTypes.object.isRequired,
    instrumentGroupName: PropTypes.string.isRequired,
    instrumentName: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    changeNote: PropTypes.func.isRequired
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    return this.props.instrument !== nextProps.instrument;
  };

  render() {
    const {
      instrument,
      instrumentGroupName,
      instrumentName,
      index,
      changeNote
    } = this.props;
    return getColumns(
      instrument,
      index,
      changeNote,
      instrumentGroupName,
      instrumentName
    );
  }
}
