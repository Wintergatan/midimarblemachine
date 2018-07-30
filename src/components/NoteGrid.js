import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Instrument from "../atoms/Instrument";

const SvgContainer = styled.svg``;

const RowNumber = styled.text`
  fill: black;
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

    const RowNumbers = new Array(64).fill(false).map((_, i) => {
      return (
        <RowNumber key={"RowNumber" + i} x={30} y={i * 250 + 40}>
          {i + 1}
        </RowNumber>
      );
    });

    return (
      <div>
        <SvgContainer width={width} height={height}>
          {RowNumbers}
          {all}
        </SvgContainer>
      </div>
    );
  }
}

export default NoteGrid;
