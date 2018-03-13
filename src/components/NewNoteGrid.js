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
    Object.keys(instruments).forEach(key => {
      const x = notes[key].filter(note => {
        Object.keys(instruments[key]).forEach(instrumentKey => {
          //console.log("instrument", instrumentKey);
        });

        return true; // .alternating.contains(note.name);
      });

      //console.log(instruments[key]);
      //console.log("test", x);
    });

    return <Note />;
  }
}
