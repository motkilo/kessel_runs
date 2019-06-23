import React from "react";
import Map from "../Map";
import Col from "../Col";
import Row from "../Row";
import "./style.css";

function KesselCard() {

  return (
    <div className= "kessel_card">
      <span>Test Span</span>
      <div id='map'>
      </div>
      <div id='kessel_data'>
        <Row>
          <Col size="md-9" id='kessel_pics'>
            <p> blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blah </p>
          </Col>
          <Col size="md-3" id='kessel_stats'>
            <p>Driver/s: </p>

          </Col>
        </Row>
      </div>

    </div>
  )

}

export default KesselCard;