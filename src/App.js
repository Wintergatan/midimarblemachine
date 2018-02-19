import React, { Component } from "react";
import { NoteGrid } from "./components/NoteGrid";

// Plate
// 8 plates per wheel
// columns
// 1-22 vibraphone
// 23-24 kick drum
// 25-26 snare drum
// 27-28 Hihat
// 29-30 Cymbal
// 31-38 Bass
// 31-32 bass string E
// 33-34 bass string A
// 35-36 bass string D
// 37-38 bass string G
// x mm distance between rows
// x mm distance between columns

class App extends Component {
  render() {
    return <NoteGrid />;
  }
}

export default App;
