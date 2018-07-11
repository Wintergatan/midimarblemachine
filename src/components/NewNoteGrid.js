import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Note } from "../atoms/Note";

const SvgContainer = styled.svg`
  transform-origin: 50% 50%;
  transform: scale(1, -1);
`;

// const yIntervals = {
//   regular: [875, 750, 625, 500, 375, 250, 125, 0],
//   alternating: [666, 333, 0]
// };

const yIntervals = {
  row1: [ 0, 125, 250, 375, 500, 625, 750, 875 ],
  row2: [ 0, 250, 500, 750 ]
}

const xIntervals = [5, 50, 100];

function Notes(props) {
//   console.log("result",props.result)
//   const yTotal = 2000;
//   console.log("notes", props.result.drums.kick.alternating)

//   return props.result.drums.kick.alternating.map((note, index) => {
//     const x = getXIndex(note);
//     const y = yTotal - (note * 250) + 60; 
//     return <Note key={"note" + note} x={x} y={y} />;
//   });
// //
  // Column 1

  return (
    <g>
      <Note x={5} y={125} />
      <Note x={5} y={375} />
      <Note x={5} y={625} />
      <Note x={5} y={875} />

      <Note x={50} y={0} />
      <Note x={50} y={250} />
      <Note x={50} y={500} />
      <Note x={50} y={750} />

      <Note x={100} y={333} />
      <Note x={100} y={666} />
    </g>
  );
}

function getXIndex(note) {
  if (note % 0.5 === 0) {
    console.log("column 2", note);
    return 2//xIntervals[1];
  } else if (note % 0.25 === 0) {
    console.log("column 1", note);
    return 1//xIntervals[0];
  } else {
    console.log("column 3", note);
    return 3//xIntervals[2];
  }
}

export class NewNoteGrid extends Component {
  static propTypes = {
    instruments: PropTypes.object.isRequired,
    notes: PropTypes.object.isRequired
  };

  state = {};

  render() {
    const { instruments, notes } = this.props;
    // 0 1 49 50 99 100 127
    // 1   0.007874015748031496
    // 49  0.3858267716535433
    // 50  0.3937007874015748
    // 99  0.7795275590551181
    // 100 0.7874015748031497
    // 127 1
    // 1-49 Manual Channel 1
    // 50-99 Alternating
    // 100-127 manual Channel 2
    const manual1Treshold = 0.3858267716535433;
    const alternatingTreshold = 0.7795275590551181;

    let parsedResults = {
      drums: {},
      bass: {},
      vibraphone: {}
    };

    Object.keys(instruments).forEach(instrument => {
      Object.keys(instruments[instrument]).forEach(instrumentPart => {
        const goodNotes = notes[instrument].filter(note => {
          // return true;
          return instruments[instrument][instrumentPart].includes(note.name);
        });

        const manual1 = goodNotes
          .filter(note => {
            return note.velocity <= manual1Treshold;
          })
          .map(note => note.time);
        const alternating = goodNotes
          .filter(note => {
            return (
              note.velocity > manual1Treshold &&
              note.velocity <= alternatingTreshold
            );
          })
          .map(note => note.time);
        const manual2 = goodNotes
          .filter(note => {
            return note.velocity > alternatingTreshold;
          })
          .map(note => note.time);

        parsedResults[instrument][instrumentPart] = {
          manual1,
          alternating,
          manual2
        };
      });
    });

    console.log("parsedResults", parsedResults);

    const width = 2000;
    const height = 1000;
    return (
      <SvgContainer width={width} height={height}>
        {/* <rect
          x={0}
          y={0}
          width={150}
          height={1000}
          stroke="black"
          strokeWidth={5}
          fill={"white"}
        /> */}
        <Notes result={parsedResults} />

        {/* <Note x={5} y={125} />
        <Note x={5} y={375} />
        <Note x={5} y={625} />
        <Note x={5} y={875} />

        <Note x={50} y={0} />
        <Note x={50} y={250} />
        <Note x={50} y={500} />
        <Note x={50} y={750} />

        <Note x={100} y={333} />
        <Note x={100} y={666} /> */}
      </SvgContainer>
    );
  }
}
