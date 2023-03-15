import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Vidcards = () => {
  return (
    <>
      <Container fluid="md mx-auto">
        <h3 className="mt-5">
          <span>Upcoming Launch</span>
        </h3>
        <Row className="mt-5">
          <Col>
            <div className="vid">
              <video
                className="vids border border-dark"
                src="mgh.mp4"
                autoPlay
                muted
                loop
                width="600px"
                height="385px"
              />
            </div>
          </Col>
          <Col>
            <div>
              <video
                className="vids border border-dark"
                src="suzuki.mp4"
                autoPlay
                muted
                loop
                width="600px"
              />
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <div className="vid">
              <video
                className="vids border border-dark"
                src="xuv700.mp4"
                autoPlay
                muted
                loop
                width="600px"
                // height="360px"
              />
            </div>
          </Col>
          <Col>
            <div>
              <video
                className="vids border border-dark"
                src="thar1.mp4"
                autoPlay
                muted
                loop
                width="600px"
                height="335px"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Vidcards;
