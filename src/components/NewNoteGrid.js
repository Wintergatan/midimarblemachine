import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Note } from "../atoms/Note";

export class NewNoteGrid extends Component {
  static propTypes = {
    instruments: PropTypes.object.isRequired,
    notes: PropTypes.object.isRequired
  };
  render() {
    const { instruments, notes } = this.props;
    //const group = "bass";

    let result = { drums: {}, bass: {}, vibraphone: {} };

    Object.keys(instruments).forEach(group => {
      ["alternating", "regular"].forEach(kind => {
        Object.keys(instruments[group]).forEach(item => {
          const filteredNotes = notes[group]
            .filter(note => {
              return instruments[group][item][kind].indexOf(note.name) !== -1;
            })
            .map(note => note.time);
          // console.log("filteredNotes", filteredNotes);
          if (!result[group][item]) {
            result[group][item] = {};
          }
          result[group][item][kind] = filteredNotes;
        });
      });
    });

    // console.log("result", result);

    return <pre>{JSON.stringify(result, null, 2)}</pre>;
  }
}
