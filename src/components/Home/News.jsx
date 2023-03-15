import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const News = () => {
  return (
    <>
        <h3 className="mt-5">
        <span>News</span>
      </h3>

      <Container>
        <div className="cont1 me-3 mt-5 mx-auto">
          <Row>
            <Col className="cardm">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./img/rdharr.jpg" />
                <Card.Body>
                  <Card.Title>Top SUV's in India</Card.Title>
                  <Card.Text>
                    Mahindra Thar, XUV 700, Scorpio, Kia Seltos, MG Hector.
                  </Card.Text>
                  <Button variant="outline-dark">Show Cars</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="cardm">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./img/rdnex.jpg" />
                <Card.Body>
                  <Card.Title>Top Sedan in India</Card.Title>
                  <Card.Text>
                    Volkswagen Virtus, Hyundai Verna, Honda City, Civic
                  </Card.Text>
                  <Button variant="outline-dark" className="cont6">
                    Show Cars
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="cardm">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./img/rdsafa.avif" height="190px"/>
                <Card.Body>
                  <Card.Title>Top Hatchbacks in India</Card.Title>
                  <Card.Text>
                    Suzuki Baleno, Swift, i20 Elite, i10 Grand Nios
                  </Card.Text>
                  <Button variant="outline-dark">Show Cars</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="cardm">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./img/suv.webp" />
                <Card.Body>
                  <Card.Title>Top SUV's in India</Card.Title>
                  <Card.Text>
                    Mahindra Thar, XUV 700, Scorpio, Kia Seltos, MG Hector.
                  </Card.Text>
                  <Button variant="outline-dark">Show Cars</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default News