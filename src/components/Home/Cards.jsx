import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cards = () => {
  return (
    <>
      <h3 className="mt-5">
        <span>Top Cars in India</span>
      </h3>

      <Container>
        <div className="cont1 me-3 mt-5 mx-auto">
          <Row>
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
            <Col className="cardm">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./img/sedan.webp" />
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
                <Card.Img variant="top" src="./img/hatchbacks.webp" />
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
                <Card.Img variant="top" src="./img/pors.jpg" />
                <Card.Body>
                  <Card.Title>Top Luxury Cars in India</Card.Title>
                  <Card.Text>
                    Porsche 911, BMW Z4, Mercedes AMG, Audi R8, Mini Cooper S.
                  </Card.Text>
                  <Button variant="outline-dark">Show Cars</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      <h3 className="mt-5">
        <span>Featured Cars</span>
      </h3>

      <Container>
        <div className="cont1 mt-5 mx-auto ">
          <Row>
            <Col>
              <Card style={{ width: "18rem" }} className="bg-image hover-zoom">
                <Card.Img
                  variant="top"
                  src="https://cdni.autocarindia.com/ExtraImages/20210406061737_Mahindra_Thar_RT_lead.jpg"
                />
                <Card.Body>
                  <Card.Title>Mahindra Thar</Card.Title>
                  <Card.Text>
                    <b>12.12₹ Lakh</b> onwards
                    <p>On road price, Pune</p>
                  </Card.Text>
                  <Button variant="outline-dark">View Price Breakup</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./img/scorpion.jpg" />
                <Card.Body>
                  <Card.Title>Mahindra Scorpio</Card.Title>
                  <Card.Text>
                    <b>15.34₹ Lakh</b> onwards
                    <p>On road price, Pune</p>
                  </Card.Text>
                  <Button variant="outline-dark">View Price Breakup</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./img/creta2021.jpg" />
                <Card.Body>
                  <Card.Title>Hyundai Creta</Card.Title>
                  <Card.Text>
                    <b>12.92₹ Lakh</b> onwards
                    <p>On road price, Pune</p>
                  </Card.Text>
                  <Button variant="outline-dark">View Price Breakup</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://imgnew.outlookindia.com/public/uploads/articles/2019/6/28/hector_1_20190628.jpg"
                />
                <Card.Body>
                  <Card.Title>MG Hector</Card.Title>
                  <Card.Text>
                    <b>16.20₹ Lakh</b> onwards
                    <p>On road price, Pune</p>
                  </Card.Text>
                  <Button variant="outline-dark">View Price Breakup</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Cards;
