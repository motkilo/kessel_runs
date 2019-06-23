
import React, { Component } from 'react';
import MapboxGl from 'mapbox-gl/dist/mapbox-gl.js';
import Col from "../Col";
import Row from "../Row";
import "./style.css";

class Map extends Component {

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

    <div id="wrapper">
      <div className='Map' ref={(x) => { this.container = x }}>
      { MapboxGl.Map}
      </div>
      <div id='kessel_data'>
        <Row>
          <Col size="md-8" id='kessel_pics'>
            <p> blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blah </p>
          </Col>
          <Col size="md-4" id='kessel_stats'>
            <p>Team: </p>
            <p>Driver/s: </p>
            <p>Machine: </p>
            <p>Run Date:  </p>
            <p>Start Location: </p>
            <p>End Location: </p>
          </Col>
        </Row>
      </div>
    </div>
      
      
    )
  }
}

export default Map;
