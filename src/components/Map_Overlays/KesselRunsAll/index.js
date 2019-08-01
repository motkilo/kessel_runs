import React from 'react';
import PropTypes from 'prop-types';
import { BaseControl } from 'react-map-gl';
import { TripsLayer } from '@deck.gl/geo-layers';
import API from '../../../utils/API';






// class KesselRunsAllOverlay extends BaseControl {

//   state = {
//     runs: [],
//     title: ""
//   };

//   componentDidMount() {
//     this.loadRuns();
//   }

//   loadRuns = () => {
//     API.getRuns()
//       .then(res => 
//         this.setState({ runs: res.data, title: ""})
//       )
//       .catch(err => console.log(err));
//   }


//   _render() {
//     const { viewport } = this._context;

//     return <div ref={ this.containerRef} />;
//   };

// }

export default KesselRunsAllOverlay;
