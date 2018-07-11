import React, { Component } from "react";
import MakerJs from "makerjs";

function Squares() {
  this.models = {
    s1: new MakerJs.models.Square(100),

    //calling makerjs.model.move and creating a model all on one line of code.
    s2: MakerJs.model.move(new MakerJs.models.Square(100), [120, 0]),

    s3: new MakerJs.models.Square(100)
  };

  //move the third square by setting its origin property.
  this.models.s3.origin = [240, 0];
}

function Note(x, y) {
  return MakerJs.model.move(new MakerJs.models.Rectangle(4, 8), [x, y]);
}

export default class Export extends Component {
  render() {
    const { instruments, notes } = this.props;

    const height = 100;
    const horizontalSpacing = 10;

    const column1x = 0;
    const column2x = horizontalSpacing;
    const column3x = 2 * horizontalSpacing;
    const verticalSpacing = height / 4;
    const offset = verticalSpacing / 2;
    const column3spacing = 100 / 3;

    const column1 = [
      new Note(column1x, offset),
      new Note(column1x, offset + verticalSpacing),
      new Note(column1x, offset + 2 * verticalSpacing),
      new Note(column1x, offset + 3 * verticalSpacing),
    ];

    const column2 = [
      new Note(column2x, 0),
      new Note(column2x, verticalSpacing),
      new Note(column2x, 2 * verticalSpacing),
      new Note(column2x, 3 * verticalSpacing)
    ];

    const column3 = [
      new Note(column3x, column3spacing),
      new Note(column3x, 2 * column3spacing),
    ];

    var line = {
      type: "line",
      origin: [0, 0],
      end: [50, 50]
    };

    var circle = {
      type: "circle",
      origin: [0, 0],
      radius: 50
    };
    var pathObject = { myLine: line, myCircle: circle };

    // var model = { paths: pathObject };
    var model = { models: [...column1, ...column2, ...column3] };
    var exportOptions = {
      units: "mm",
      useSvgPathOnly: true,
      svgAttrs: { xmlns: "http://www.w3.org/2000/svg" }
      // stroke: "red"
    };
    console.log("model", model);
    const previewSvg = MakerJs.exporter.toSVG(model, exportOptions);
    // const previewSvg = "";
    return <div dangerouslySetInnerHTML={{ __html: previewSvg }} />;
  }
}
