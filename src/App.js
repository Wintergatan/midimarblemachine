import React, { Component } from "react";
import Export from "./components/Export";
import NoteGrid from "./components/NoteGrid";
import MidiUpload from "./components/Midiupload";
import Typography from "@material-ui/core/Typography";

// To change manual/alternating
// 1-49 Manual Channel 1
// 50-99 Alternating
// 100-127 manual Channel 2
const instruments = {
  drums: {
    kick: ["C0"],
    snare: ["C1"],
    hihat: ["C2"],
    cymbal: ["C3"]
  },
  bass: {
    E: [
      "E-1",
      "F-1",
      "F#-1",
      "G-1",
      "G#-1",
      "A-1",
      "A#-1",
      "B-1",
      "C0",
      "C#0",
      "D0",
      "D#0",
      "E0",
      "F0",
      "F#0",
      "G0",
      "G#0",
      "A0",
      "A#0",
      "B0",
      "C1",
      "C#1"
    ],
    A: [
      "A1",
      "A#1",
      "B1",
      "C2",
      "C#2",
      "D2",
      "D#2",
      "E2",
      "F2",
      "F#2",
      "G2",
      "G#2",
      "A2",
      "A#2",
      "B2",
      "C3",
      "C#3",
      "D3",
      "D#3",
      "E3",
      "F3",
      "F#3",
      "G3",
      "G#3"
    ],
    D: [
      "D4",
      "D#4",
      "E4",
      "F4",
      "F#4",
      "G4",
      "G#4",
      "A4",
      "A#4",
      "B4",
      "C5",
      "C#5",
      "D5",
      "D#5",
      "E5",
      "F5",
      "F#5",
      "G5",
      "G#5",
      "A5",
      "A#5",
      "B5"
    ],
    G: [
      "G6",
      "G#6",
      "A6",
      "A#6",
      "B6",
      "C7",
      "C#7",
      "D7",
      "D#7",
      "E7",
      "F7",
      "F#7",
      "G7",
      "G#7",
      "A7",
      "A#7",
      "B7",
      "C8",
      "C#8",
      "D8",
      "D#8",
      "E8"
    ]
  },
  // To be changed later, E-minor is here as an example
  vibraphone: {
    bars: ["B1", "C2", "D2", "E2", "F#2", "G2", "A2", "B2", "C3", "D3", "E3"]
  }
};

function initInstrument() {
  return [
    Array(64 * 4).fill(false),
    Array(64 * 4).fill(false),
    Array(64 * 2).fill(false),
    Array(64 * 4).fill(false),
    Array(64 * 4).fill(false),
    Array(64 * 2).fill(false)
  ];
}

class App extends Component {
  state = {
    notes: null,
    instruments: null,
    data: {
      drums: {
        kick: initInstrument(),
        snare: initInstrument(),
        hihat: initInstrument(),
        cymbal: initInstrument()
      },
      bass: {
        E: initInstrument(),
        A: initInstrument(),
        D: initInstrument(),
        G: initInstrument()
      },
      vibraphone: {
        bar1: initInstrument(),
        bar2: initInstrument(),
        bar3: initInstrument(),
        bar4: initInstrument(),
        bar5: initInstrument(),
        bar6: initInstrument(),
        bar7: initInstrument(),
        bar8: initInstrument(),
        bar9: initInstrument(),
        bar10: initInstrument(),
        bar11: initInstrument()
      }
    }
  };
  componentDidMount() {
    const data = {
      scale: "C#",
      drums: {
        name: "drums",
        channelNumber: 0,
        notes: [
          {
            midi: 68,
            time: 0,
            duration: 0.5,
            velocity: 0.007874015748031496
          },
          {
            midi: 68,
            time: 0.5,
            duration: 0.5,
            velocity: 0.007874015748031496
          },
          {
            midi: 68,
            time: 1,
            duration: 0.5,
            velocity: 0.3858267716535433
          },
          {
            midi: 68,
            time: 1.5,
            duration: 0.5,
            velocity: 0.3937007874015748
          },
          {
            midi: 68,
            time: 2,
            duration: 0.5,
            velocity: 0.7795275590551181
          },
          {
            midi: 68,
            time: 2.5,
            duration: 0.5,
            velocity: 0.7874015748031497
          },
          {
            midi: 68,
            time: 3,
            duration: 0.5,
            velocity: 1
          }
        ],
        controlChanges: {
          "7": [
            {
              number: 7,
              time: 0,
              value: 1
            },
            {
              number: 7,
              time: 0,
              value: 1
            }
          ],
          "32": [
            {
              number: 32,
              time: 0,
              value: 0
            },
            {
              number: 32,
              time: 0,
              value: 0
            }
          ]
        },
        instrumentNumber: 0,
        id: 1
      },
      bass: {
        name: "bass",
        channelNumber: 1,
        notes: [
          {
            midi: 68,
            time: 0,
            duration: 0.5,
            velocity: 0.007874015748031496
          },
          {
            midi: 68,
            time: 0.5,
            duration: 0.5,
            velocity: 0.007874015748031496
          },
          {
            midi: 68,
            time: 1,
            duration: 0.5,
            velocity: 0.3858267716535433
          },
          {
            midi: 68,
            time: 1.5,
            duration: 0.5,
            velocity: 0.3937007874015748
          },
          {
            midi: 68,
            time: 2,
            duration: 0.5,
            velocity: 0.7795275590551181
          },
          {
            midi: 68,
            time: 2.5,
            duration: 0.5,
            velocity: 0.7874015748031497
          },
          {
            midi: 68,
            time: 3,
            duration: 0.5,
            velocity: 1
          }
        ],
        controlChanges: {
          "7": [
            {
              number: 7,
              time: 0,
              value: 1
            }
          ],
          "32": [
            {
              number: 32,
              time: 0,
              value: 0
            }
          ]
        },
        instrumentNumber: 0,
        id: 2
      },
      vibraphone: {
        name: "vibraphone",
        channelNumber: 2,
        notes: [
          {
            midi: 68,
            time: 0,
            duration: 0.5,
            velocity: 0.007874015748031496
          },
          {
            midi: 68,
            time: 0.5,
            duration: 0.5,
            velocity: 0.007874015748031496
          },
          {
            midi: 68,
            time: 1,
            duration: 0.5,
            velocity: 0.3858267716535433
          },
          {
            midi: 68,
            time: 1.5,
            duration: 0.5,
            velocity: 0.3937007874015748
          },
          {
            midi: 68,
            time: 2,
            duration: 0.5,
            velocity: 0.7795275590551181
          },
          {
            midi: 68,
            time: 2.5,
            duration: 0.5,
            velocity: 0.7874015748031497
          },
          {
            midi: 68,
            time: 3,
            duration: 0.5,
            velocity: 1
          }
        ],
        controlChanges: {
          "7": [
            {
              number: 7,
              time: 0,
              value: 1
            }
          ],
          "32": [
            {
              number: 32,
              time: 0,
              value: 0
            }
          ]
        },
        instrumentNumber: 0,
        id: 3
      }
    };
    this.setData(data);
  }

  changeNote = (instrumentGroup, instrument, column, index, newValue) => {
    let newInstrument = Object.assign(
      {},
      this.state.data[instrumentGroup][instrument]
    );
    newInstrument[column][index] = newValue;

    console.log("newValue", newValue);
    this.setState({
      data: {
        ...this.state.data,
        [instrumentGroup]: {
          ...this.state.data[instrumentGroup],
          [instrument]: newInstrument
        }
      }
    });
  };

  setData = data => {
    console.log("setData", data);
  };

  render() {
    const { instruments, notes, data } = this.state;
    return (
      <div>
        {/* <Typography variant="display4" gutterBottom>
            MMX Programmer
          </Typography> */}
        <MidiUpload setData={this.setData} />
        Interactive notegrid
        <NoteGrid data={data} changeNote={this.changeNote} />
        {/* Render <Export data={data} /> */}
      </div>
    );
  }
}

export default App;
