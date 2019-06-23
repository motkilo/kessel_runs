import React from "react";
import Masthead from "../components/Masthead";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


function Home() {
  return (
    <div>
      <Masthead />
      <Container style={{marginTop: 30}}>
        <Row>
          <Col size="md-12">
          <h1>Kessel Runs</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-8">
            <h1>This is an 8 column: Row 1</h1>
            <p> text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext </p>
          </Col>
          <Col size="md-4">
            <h3>This is a 4 column: Row 1</h3>
            <p> text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>This area is a 12 column: Row 2</p>
            <p> text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext </p>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default Home;