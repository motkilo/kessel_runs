import React, { Component } from 'react';
import Masthead from "../components/Masthead";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import KesselMap from "../components/KesselMap";

export default class Kessels extends Component {
  render() {
    return (
      <div>
        <Masthead />
        
        <KesselMap />
          
      </div>
    );
  }
}



