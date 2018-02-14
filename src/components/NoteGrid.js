import React, { Component } from "react";
import { Note } from "../atoms/Note";

export class NoteGrid extends Component {
  render() {
    return (
      <svg width="100%" height="100%">
        <Note x={10} y={10} />
      </svg>
    );
  }
}
