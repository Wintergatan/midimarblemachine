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

function getColumns(instrument) {
  const height = 100;
  const horizontalSpacing = 10;

  const column1x = 0;
  const column2x = horizontalSpacing;
  const column3x = 2 * horizontalSpacing;
  const column4x = 3 * horizontalSpacing;
  const column5x = 4 * horizontalSpacing;
  const column6x = 5 * horizontalSpacing;
  const verticalSpacing = height / 4;
  const offset = verticalSpacing / 2;
  const column3spacing = height / 3;

  const column1 = instrument[0]
    .map((value, index) => {
      if (value !== false) {
        return new Note(column1x, offset + index * verticalSpacing);
      }
      return false;
    })
    .filter(v => v !== false);

  const column2 = instrument[1]
    .map((value, index) => {
      if (value !== false) {
        return new Note(column2x, index * verticalSpacing);
      }
      return false;
    })
    .filter(v => v !== false);

  const column3 = instrument[2]
    .map((value, index) => {
      if (value !== false) {
        return new Note(column3x, (index + 1) * column3spacing);
      }
      return false;
    })
    .filter(v => v !== false);

  const column4 = instrument[3]
    .map((value, index) => {
      if (value !== false) {
        return new Note(column4x, offset + index * verticalSpacing);
      }
      return false;
    })
    .filter(v => v !== false);

  const column5 = instrument[4]
    .map((value, index) => {
      if (value !== false) {
        return new Note(column5x, index * verticalSpacing);
      }
      return false;
    })
    .filter(v => v !== false);

  const column6 = instrument[5]
    .map((value, index) => {
      if (value) {
        return new Note(column6x, (index + 1) * column3spacing);
      }
      return false;
    })
    .filter(v => v !== false);

  const surroundingRectangle = new MakerJs.models.Rectangle(54, height);

  return [
    ...column1,
    ...column2,
    ...column3,
    ...column4,
    ...column5,
    ...column6,
    surroundingRectangle
  ];
}

export default class Export extends Component {
  render() {
    const { instruments, notes } = this.props;
    const width = 64;

    const data = {
      drums: {
        kick: [
          [true, true, true, true],
          [true, true, true, true],
          [true, true],
          [true, true, true, true],
          [true, true, true, true],
          [true, true]
        ],
        snare: [
          [true, false, true, true],
          [true, true, true, false],
          [true, true],
          [true, false, true, true],
          [true, true, true, false],
          [true, true]
        ],
        hihat: [
          [true, false, true, true],
          [true, true, true, false],
          [true, true],
          [true, false, true, true],
          [true, true, true, false],
          [true, true]
        ],
        cymbal: [
          [true, true, true, true],
          [true, true, true, false],
          [true, true],
          [true, true, true, true],
          [true, true, true, false],
          [true, true]
        ]
      },
      bass: {
        E: [
          [12, false, false, 12],
          [12, false, false, 12],
          [12, false],
          [12, false, false, 12],
          [12, false, false, 12],
          [12, false]
        ],
        A: [
          [38, false, false, 38],
          [38, false, false, 38],
          [38, false],
          [38, false, false, 38],
          [38, false, false, 38],
          [38, false]
        ],
        D: [
          [74, false, false, 74],
          [74, false, false, 74],
          [74, false],
          [74, false, false, 74],
          [74, false, false, 74],
          [74, false]
        ],
        G: [
          [100, false, false, 100],
          [100, false, false, 100],
          [100, false],
          [100, false, false, 100],
          [100, false, false, 100],
          [100, false]
        ]
      },
      vibraphone: {
        bar1: [
          [1, false, false, 0],
          [0, false, false, 0],
          [0, false],
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false]
        ],
        bar2: [
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false],
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false]
        ],
        bar3: [
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false],
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false]
        ],
        bar4: [
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false],
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false]
        ],
        bar5: [
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false],
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false]
        ],
        bar6: [
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false],
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false]
        ],
        bar7: [
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false],
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false]
        ],
        bar8: [
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false],
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false]
        ],
        bar9: [
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false],
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false]
        ],
        bar10: [
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false],
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false]
        ],
        bar11: [
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false],
          [0, false, false, 0],
          [0, false, false, 0],
          [0, false]
        ]
      }
    };

    const tempModel = {
      models: {
        drums: {
          models: {
            kick: {
              models: getColumns(data.drums.kick),
              origin: [0, 0]
            },
            snare: {
              models: getColumns(data.drums.snare),
              origin: [width, 0]
            },
            hihat: {
              models: getColumns(data.drums.hihat),
              origin: [2 * width, 0]
            },
            cymbal: {
              models: getColumns(data.drums.cymbal),
              origin: [3 * width, 0]
            }
          }
        },
        bass: {
          models: {
            E: {
              models: getColumns(data.bass.E),
              origin: [4 * width, 0]
            },
            A: {
              models: getColumns(data.bass.A),
              origin: [5 * width, 0]
            },
            D: {
              models: getColumns(data.bass.D),
              origin: [6 * width, 0]
            },
            G: {
              models: getColumns(data.bass.G),
              origin: [7 * width, 0]
            }
          }
        },
        vibraphone: {
          models: {
            bar1: {
              models: getColumns(data.vibraphone.bar1),
              origin: [8 * width, 0]
            },
            bar2: {
              models: getColumns(data.vibraphone.bar2),
              origin: [9 * width, 0]
            },
            bar3: {
              models: getColumns(data.vibraphone.bar3),
              origin: [10 * width, 0]
            },
            bar4: {
              models: getColumns(data.vibraphone.bar4),
              origin: [11 * width, 0]
            },
            bar5: {
              models: getColumns(data.vibraphone.bar5),
              origin: [12 * width, 0]
            },
            bar6: {
              models: getColumns(data.vibraphone.bar6),
              origin: [13 * width, 0]
            },
            bar7: {
              models: getColumns(data.vibraphone.bar7),
              origin: [14 * width, 0]
            },
            bar8: {
              models: getColumns(data.vibraphone.bar8),
              origin: [15 * width, 0]
            },
            bar9: {
              models: getColumns(data.vibraphone.bar9),
              origin: [16 * width, 0]
            },
            bar10: {
              models: getColumns(data.vibraphone.bar10),
              origin: [17 * width, 0]
            },
            bar11: {
              models: getColumns(data.vibraphone.bar11),
              origin: [18 * width, 0]
            }
          }
        }
      }
    };

    // const tempModel = Object.values(data).map(instrumentGroup => {
    //   console.log(instrumentGroup);
    //   return Object.values(instrumentGroup).map(instrument => {
    //     // console.log("instrument", instrument);
    //     const column = instrument.map((column, columnIndex) => {
    //       // console.log("deepest", value, columnIndex);
    //       return column.map((value, index) => {
    //         console.log("value", value, index);
    //         return new Note(column3x, column3spacing);
    //       });
    //     });
    //     return { models: column };
    //   });
    // });

    console.log("tempmodel", tempModel);

    // const model = { paths: pathObject };
    // const single = { models: [...column1, ...column2, ...column3] };
    // let second = Object.assign({}, single);
    // second.origin = [width, 0];
    // const model = { models: { single, second } };
    const exportOptions = {
      units: "mm",
      useSvgPathOnly: true,
      svgAttrs: { xmlns: "http://www.w3.org/2000/svg" }
      // stroke: "red"
    };
    // console.log("model", model);
    const previewSvg = MakerJs.exporter.toSVG(tempModel, exportOptions);
    // const previewSvg = "";
    return <div dangerouslySetInnerHTML={{ __html: previewSvg }} />;
  }
}
