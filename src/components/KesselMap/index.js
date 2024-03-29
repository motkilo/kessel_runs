import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

export default class KesselMap extends Component {

  state = {
    viewport: {
      width: 1000,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}