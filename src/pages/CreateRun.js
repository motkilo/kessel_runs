import React, { Component } from "react";
import MapboxGl from "mapbox-gl/dist/mapbox-gl.js";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import { Input, FormBtn } from "../components/Form";

class CreateRun extends Component {

  state= {
    id: "",
    title: "",
    team_name: "",
    drivers: [],
    machine_name: "",
    machine_type: "",
    start_location: "",
    end_location: "",
  };

  componentDidMount() {

    MapboxGl.accessToken = 'pk.eyJ1IjoiYWxscnlkZXIiLCJhIjoidWs5cUFfRSJ9.t8kxvO3nIhCaAl07-4lkNw';

    new MapboxGl.Map({
      container: this.container,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [-74.50, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
  }


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
            <div className='Map' ref={(x) => { this.container = x }}>
              { MapboxGl.Map}
            </div>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Name your Kessel Run (required)"
              />
              <Input
                value={this.state.machine_name}
                onChange={this.handleInputChange}
                name="machine_name"
                placeholder="Name your machine (required)"
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
                name="end_location"
                placeholder="End Location (required)"
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