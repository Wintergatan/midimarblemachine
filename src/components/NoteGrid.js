import React, { Component } from "react";
import styled from "styled-components";
import { Note } from "../atoms/Note";

const Wrapper = styled.div`
  background-color: white;
`;
const Grid = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`;
const Column = styled.div`
  flex: 1;
  flex-direction: column;
  text-align: center;
`;
const Cell = styled.div`
  border: 1px solid black;
`;

const instrumentData = {
  vibraphone: ["C0", "D0", "E0", "F0", "G0", "A1"],
  drums: ["snare", "hi-hat", "bass"]
};

const noOfRows = 32;

const columns = (
  <Grid>
    <Column key={"rowNumber"}>
      {[...Array(noOfRows).keys()].map(n => {
        return <Cell key={"rowNumber" + n}>{n}</Cell>;
      })}
    </Column>
    {Object.keys(instrumentData).map(key => {
      return instrumentData[key].map(instrument => {
        return (
          <Column key={instrument}>
            <Cell key={instrument}>
              {key} {instrument}
            </Cell>
            {[...Array(noOfRows).keys()].map(n => {
              return (
                <Cell key={instrument + n}>
                  <Note />
                </Cell>
              );
            })}
          </Column>
        );
      });
    })}
  </Grid>
);

export class NoteGrid extends Component {
  render() {
    return <Wrapper>{columns}</Wrapper>;
  }
}
