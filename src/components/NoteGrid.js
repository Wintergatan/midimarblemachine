import React, { Component } from "react";
import styled from "styled-components";
import { Note } from "../atoms/Note";

const Wrapper = styled.div`
  background-color: white;
`;
const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
`;
const Column = styled.div`
  flex: 1;
  flex-direction: column;
  text-align: center;
`;
const Cell = styled.div`
  height: 82px;
  border: 1px solid black;
`;

// Width is 100 / no of columns
const Header = styled.div`
  background-color: white;
  height: 41px;
  border: 1px solid black;
  width: 8.33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const NumberCell = styled.div`
  height: 82px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const instrumentData = {
  vibraphone: ["C0", "D0", "E0", "F0", "G0", "A1", "A2", "A3"],
  drums: ["snare", "hi-hat", "bass"]
};

const noOfRows = 32;

const headers = (
  <Grid style={{ position: "sticky", top: 0 }}>
    <Header />
    {Object.keys(instrumentData).map(key => {
      return instrumentData[key].map(instrument => {
        return (
          <Header key={instrument}>
            {key} {instrument}
          </Header>
        );
      });
    })}
  </Grid>
);

const columns = (
  <Grid>
    <Column key={"rowNumber"}>
      {[...Array(noOfRows).keys()].map(n => {
        return <NumberCell key={"rowNumber" + n}>{n + 1}</NumberCell>;
      })}
    </Column>
    {Object.keys(instrumentData).map(key => {
      return instrumentData[key].map(instrument => {
        return (
          <Column key={instrument}>
            {/*<Cell key={instrument}>
              {key} {instrument}
        </Cell>*/}
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
    return (
      <Wrapper>
        {headers}
        {columns}
      </Wrapper>
    );
  }
}
