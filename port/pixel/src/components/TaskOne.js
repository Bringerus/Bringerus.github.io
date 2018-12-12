import React from "react";
import { connect } from "react-redux";
import { addTask, deleteTask } from "../actions/userActions";

import {
  Button,
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";

import "./TaskOne.css";

export class TaskOne extends React.Component {
  state = {
    value: "",
    error: ""
  };

  addTask = (e, task) => {
    e.preventDefault();
    const { value } = this.state;

    if (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    )
      this.setState({ errors: "string in empty" });
    else {
      this.props.addTask(value);
      this.setState({ value: "", errors: "" });
    }
  };

  deleteTask = e => {
    e.preventDefault();
    this.props.deleteTask(parseInt(e.currentTarget.id));
  };

  handleChange = e => {
    this.setState({ value: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <Grid className="TaskOne">
          <Row className="show-grid TaskOne-Title">Task #1</Row>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <FormGroup controlId="formBasicText" onSubmit={this.onSubmit}>
                <ControlLabel />
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <Button className="TaskOne-Add-Butt" onClick={this.addTask}>
                  Add text
                </Button>
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <div className="TaskOne-List">List:</div>
              <ListGroup>
                {this.props.user.tasks < 0
                  ? null
                  : this.props.user.tasks.map((task, key) => {
                      return (
                        <ListGroupItem key={key}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              fontSize: "1.5em"
                            }}
                          >
                            {task}
                            <Button id={key} onClick={this.deleteTask}>
                              delete text
                            </Button>
                          </div>
                        </ListGroupItem>
                      );
                    })}
              </ListGroup>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { addTask, deleteTask }
)(TaskOne);
