import React, { Component } from "react";
import styled from "styled-components";
import { Note } from "../atoms/Note";

const instrumentData = {
  vibraphone: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22"
  ],
  kickDrum: ["1", "2"],
  snareDrum: ["1", "2"],
  hihat: ["1", "2"],
  cymbal: ["1", "2"],
  Bass: ["E 1", "E 2", "A 1", "A2", "D 1", "D 2", "G 1", "G 2"]
};

const noOfRows = 32;

let noOfColumns = 0;
Object.keys(instrumentData).forEach(key => {
  noOfColumns += instrumentData[key].length;
});

const Container = styled.div`
  display: grid;
  grid-template-columns: 50px repeat(${noOfColumns}, 1fr);
  grid-template-rows: 50px 50px repeat(${noOfRows}, 1fr);
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
`;

const Numbering = styled.div`
  border: 1px solid black;
  grid-column: 1;
`;

function Notes(props) {
  let counter = 1;
  return Object.keys(instrumentData).map(key => {
    return instrumentData[key].map(instrument => {
      counter++;
      return Array(noOfRows)
        .fill()
        .map((_, i) => {
          return (
            <Cell
              key={"noteWrapper" + key + instrument + i}
              style={{ gridColumn: counter, gridRow: i + 3 }}
            >
              <Note
                key={"note" + i}
                id={key + instrument + i}
                callback={props.callback}
              />
            </Cell>
          );
        });
    });
  });
}

export class NoteGrid extends Component {
  myCallback = dataFromChild => {
    // console.log(dataFromChild);
  };

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
            <Numbering
              style={{
                gridRow: i + 3
              }}
              key={"rowNumber" + i + 1}
            >
              {i + 1}
            </Numbering>
          ))}
        <Notes callback={this.myCallback} />
      </Container>
    );
  }
}
