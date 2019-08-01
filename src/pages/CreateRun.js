import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import { Input, FormBtn } from "../components/Form";
import KesselMap from "../components/KesselMap";

class CreateRun extends Component {

  state= {
    id: "",
    title: "",
    team_name: "",
    drivers: [],
    machine_name: "",
    machine_type: "",
    start_location: "",
    finish_location: "",
  };

  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Create Run Form</h1>
            </Jumbotron> 
          </Col>
        </Row>
        <Row>
          <Col size="md-8">
            <KesselMap>
              

            </KesselMap>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Name your Kessel Run (required)"
              />
              <Input
                value={this.state.start_location}
                onChange={this.handleInputChange}
                name="start_location"
                placeholder="Start Location (required)"
              />
              <Input
                value={this.state.end_location}
                onChange={this.handleInputChange}
                name="finish_location"
                placeholder="Finish Location (required)"
              />
              <FormBtn
                disabled={!(
                  this.state.title &&
                  this.state.machine_name &&
                  this.state.start_location &&
                  this.state.end_location
                )}
                onClick={this.handleFormSubmit}
              >
                Submit Run
              </FormBtn>

            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateRun;