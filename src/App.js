import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { NoteGrid } from "./components/NoteGrid";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Grid>
          <Row>
            <Col>
              <NoteGrid />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
