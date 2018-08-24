import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Instrument from "../atoms/Instrument";

const SvgContainer = styled.svg`
  position: absolute;
  top: 20px;
  left: 30px;
`;

const Container = styled.div`
  position: relative;
`;

const RowNumber = styled.div`
  width: 30px;
  height: 250px;
  padding-top: 120px;
  padding-right: 5px;
  border: 1px solid black;
  border-left: none;
`;

const RowNumbersContainer = styled.div`
  position: sticky;
  left: 0;
  width: 30px;
  background-color: #fafafa;
  z-index: 2;
  text-align: right;
`;

const ColumnNamesContainer = styled.div`
  position: sticky;
  top: 0;
  white-space: nowrap;
  z-index: 1;
  text-align: center;
  margin-left: 30px;
`;

const ColumnName = styled.div`
  display: inline-block;
  width: 120px;
  background-color: #fafafa;
  border: 1px solid black;
`;

class NoteGrid extends Component {
  constructor(props) {
    super(props);

    this.instrumentRefs = new Array(19).fill().map((_, i) => {
      return React.createRef();
    });
  }

  static propTypes = {
    data: PropTypes.object.isRequired,
    changeNote: PropTypes.func.isRequired
  };

  update = () => {
    this.instrumentRefs.forEach(ref => {
      ref.current.forceUpdate();
    });
  };

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   return this.props.data !== nextProps.data;
  // };

  render() {
    const { data, changeNote } = this.props;
    const width = 2300;
    const height = 16020;

    // const kick = getColumns(data.drums.kick, 0, changeNote, "drums", "kick");
    // const snare = getColumns(data.drums.snare, 1, changeNote, "drums", "snare");
    let i = -1;
    const all = Object.keys(data).map(instrumentGroup => {
      return Object.keys(data[instrumentGroup]).map(instrument => {
        i++;
        return (
          <Instrument
            key={instrumentGroup + instrument + i}
            ref={this.instrumentRefs[i]}
            instrument={data[instrumentGroup][instrument]}
            index={i}
            changeNote={changeNote}
            instrumentGroupName={instrumentGroup}
            instrumentName={instrument}
          />
        );
      });
    });

    // const RowNumbers = new Array(64).fill(false).map((_, i) => {
    //   return (
    //     <RowNumber key={"RowNumber" + i} x={30} y={i * 250 + 40}>
    //       {i + 1}
    //     </RowNumber>
    //   );
    // });    // const RowNumbers = new Array(64).fill(false).map((_, i) => {
    //   return (
    //     <RowNumber key={"RowNumber" + i} x={30} y={i * 250 + 40}>
    //       {i + 1}
    //     </RowNumber>
    //   );
    // });
    const ColumnNames = Object.keys(data).map(instrumentGroup => {
      return Object.keys(data[instrumentGroup]).map(instrument => {
        i++;
        return (
          <ColumnName key={instrumentGroup + instrument + i}>
            {instrumentGroup} {instrument}
          </ColumnName>
        );
      });
    });
    const RowNumbers = new Array(64).fill(false).map((_, i) => {
      return <RowNumber key={"RowNumber" + i}>{i + 1}</RowNumber>;
    });

    return (
      <Container>
        <ColumnNamesContainer>{ColumnNames}</ColumnNamesContainer>
        <RowNumbersContainer>{RowNumbers}</RowNumbersContainer>
        <SvgContainer width={width} height={height}>
          {all}
        </SvgContainer>
      </Container>
    );
  }
}

export default NoteGrid;
