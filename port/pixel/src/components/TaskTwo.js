import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap";
import { getInitState } from "../actions/sliderActions";

import "./TaskTwo.css";

export class TaskTwo extends React.Component {
  constructor() {
    super();
    this.timer = null;
  }

  static defaultProps = {
    min: 0,
    max: 5000,
    value: 0
  };

  state = {
    sliderValue: 0,
    milliseconds: 0,
    currRate: 0
  };

  componentDidMount() {
    this.start(this.state.sliderValue);
  }

  tick = time => {
    this.setState({ milliseconds: this.state.milliseconds + time });
  };

  start = rate => {
    this.timer = setInterval(() => this.tick(rate), rate);
  };

  stop = () => {
    clearInterval(this.timer);
  };

  onChange = e => {
    e.preventDefault();
    const { value } = e.currentTarget;
    this.setState({ currRate: value });
    this.stop();
    this.start(parseInt(value));
  };

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid TaskTwo-Title">Task #2</Row>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <div className="containerInput" style={{ width: "100%" }}>
                <label htmlFor="customRange1">Rate</label>
                <input
                  defaultValue={this.props.value}
                  step={this.props.slider.step}
                  max="5000"
                  type="range"
                  className="custom-range"
                  id="customRange1"
                  onChange={this.onChange}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{this.props.min}</span>
                <span>{this.props.max}</span>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <span>Counter : {this.state.milliseconds} </span> <br />
              <span> Current Rate : {this.state.currRate} </span>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  slider: state.slider
});

export default connect(
  mapStateToProps,
  { getInitState }
)(TaskTwo);
