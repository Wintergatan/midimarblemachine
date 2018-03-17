import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Note } from "../atoms/Note";

function Notes(props) {
  console.log(props.result.bass.D.alternating);
  return props.result.bass.D.alternating.map(note => {
    return <Note key={"note" + note} x={note} y={5} />;
  });
}

export class NewNoteGrid extends Component {
  static propTypes = {
    instruments: PropTypes.object.isRequired,
    notes: PropTypes.object.isRequired
  };
  render() {
    const { instruments, notes } = this.props;
    //const group = "bass";

    //let result = { drums: {}, bass: {}, vibraphone: {} };

    // Object.keys(instruments).forEach(group => {
    //   ["alternating", "regular"].forEach(kind => {
    //     Object.keys(instruments[group]).forEach(item => {
    //       const filteredNotes = notes[group]
    //         .filter(note => {
    //           return instruments[group][item][kind].indexOf(note.name) !== -1;
    //         })
    //         .map(note => note.time);
    //       // console.log("filteredNotes", filteredNotes);
    //       if (!result[group][item]) {
    //         result[group][item] = {};
    //       }
    //       result[group][item][kind] = filteredNotes;
    //     });
    //   });
    // });

    const result = Object.keys(instruments).map(instrument => {
      console.log("instruments", instrument);
      Object.keys(instruments[instrument]).map(instrumentPart => {
        console.log("instrumentPart", instrumentPart);
        instruments[instrument][instrumentPart].filter(note => {
          console.log(note);
        });
      });
    });

    console.log("result", result);

    return (
      <svg width="1000px" height="1000px">
        <rect
          x={0}
          y={0}
          width={150}
          height={1000}
          stroke="black"
          strokeWidth={5}
          fill={"white"}
        />
        {/* <Notes result={result} /> */}

        <Note x={5} y={125} />
        <Note x={5} y={375} />
        <Note x={5} y={625} />
        <Note x={5} y={875} />

        <Note x={50} y={0} />
        <Note x={50} y={250} />
        <Note x={50} y={500} />
        <Note x={50} y={750} />

        <Note x={100} y={0} />
        <Note x={100} y={333} />
        <Note x={100} y={666} />
      </svg>
    );
  }
}
