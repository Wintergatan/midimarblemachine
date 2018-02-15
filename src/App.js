import React, { Component } from "react";
import { NoteGrid } from "./components/NoteGrid";
import "./App.css";

// Plate
// 8 plates per whell
// 32 rows
// x columns
// x mm distance between rows
// x mm distance between columns

class App extends Component {
  render() {
    return <NoteGrid />;
  }
}

export default App;
