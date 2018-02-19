import React, { Component } from "react";
import styled from "styled-components";
import { Note } from "../atoms/Note";

const instrumentData = {
  vibraphone: ["C0", "D0", "E0", "F0", "G0", "A1", "A2", "A3"],
  drums: ["snare", "hi-hat", "bass"]
};

const noOfRows = 32;

let noOfColumns = 0;
Object.keys(instrumentData).forEach(key => {
  noOfColumns += instrumentData[key].length;
});

const Container = styled.div`
  display: grid;
  grid-template-columns: 50px repeat(${noOfColumns}, 1fr);
  grid-template-rows: 50px 50px repeat(${noOfRows}, 100px);
  grid-gap: 1px;
`;

const InstrumentGroup = styled.div`
  border: 1px solid black;
`;

const Instrument = styled.div`
  border: 1px solid black;
`;

const Cell = styled.div`
  border: 1px solid black;
  text-align: center;
`;

export class NoteGrid extends Component {
  myCallback = dataFromChild => {};

  render() {
    let start = 2;
    return (
      <Container>
        <Cell />
        {Object.keys(instrumentData).map(key => {
          const end = start + instrumentData[key].length;
          const result = (
            <InstrumentGroup
              key={key}
              style={{ gridRow: 1, gridColumn: `${start}/${end}` }}
            >
              {key}
            </InstrumentGroup>
          );
          start = end;
          return result;
        })}
        <Cell />
        {Object.keys(instrumentData).map(key => {
          return instrumentData[key].map(instrument => {
            return <Instrument key={key + instrument}>{instrument}</Instrument>;
          });
        })}
        {Array(noOfRows)
          .fill()
          .map((_, i) => (
            <div
              style={{
                gridRow: i + 3,
                gridColumn: 1,
                border: "1px solid black"
              }}
              key={"rowNumber" + i + 1}
            >
              {i + 1}
            </div>
          ))}
        {Array(noOfColumns * noOfRows)
          .fill()
          .map((_, i) => (
            <Cell key={"noteWrapper" + i} style={{ border: "1px solid black" }}>
              <Note key={"note" + i} callback={this.myCallback} />
            </Cell>
          ))}
      </Container>
    );
  }
}
