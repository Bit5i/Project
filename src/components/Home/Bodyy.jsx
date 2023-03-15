import React from "react";
import Stack from "react-bootstrap/Stack";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import $ from "jquery";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
// import Fade from 'react-reveal/Fade';

const searchFocus = document.getElementById('search-focus');
const keys = [
  { keyCode: 'AltLeft', isTriggered: false },
  { keyCode: 'ControlLeft', isTriggered: false },
];

window.addEventListener('keydown', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = true;
    }
  });

  const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

  if (shortcutTriggered) {
    searchFocus.focus();
  }
});

window.addEventListener('keyup', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = false;
    }
  });
});
const Bodyy = () => {
  return (
    <>
      


<div className="image-with-text">
        <Container>
          
          <Row>
            <Col className="text-center mt-4">



<div className="container w-75">

                    <div className="row height d-flex justify-content-center align-items-center">

                      <div className="col-md-8">

                        <div className="search">
                          <i className="fa fa-search"></i>
                          <input type="text" className="form-control" placeholder="Search for Used Cars"/>
                          <button className="btn btn-primary">Search</button>
                        </div>
                        
                      </div>
                      
                    </div>
                </div>


            </Col>
          </Row>
          
        </Container>
      </div>

      <div className="p1" />
      <h1 className="top"> All brands</h1>

      

      <Container>
        <Row className="box">
          <Col>
            <img src="/img/benz.jpg" height={90} />
          </Col>
          <Col>
            <img
              src="https://www.carlogos.org/car-logos/nissan-logo-2020-black.png"
              height={90}
            />
          </Col>
          <Col>
            <img src="/img/hynd.png" height={90} />
          </Col>
          <Col>
            <img
              src="https://www.freepnglogos.com/uploads/toyota-logo-png/toyota-logos-brands-10.png"
              height={90}
            />
          </Col>
          <Col>
            <img
              src="https://www.carlogos.org/logo/Jaguar-logo-2012-640x287.jpg"
              height={90}
            />
          </Col>
          <Col>
            <img src="/img/mahi.png" height={90} />
          </Col>
        </Row>
        <div className="space mt-5" />
        <Row className="box">
          <Col>
            <img
              src="https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo.png"
              height={90}
            />
          </Col>
          <Col>
            <img
              src="https://www.freepnglogos.com/uploads/audi-logo-2.png"
              height={90}
            />
          </Col>
          <Col>
            <img
              src="https://1000logos.net/wp-content/uploads/2021/04/Land-Rover-logo.png"
              height={90}
            />
          </Col>
          <Col>
            <img
              src="https://www.carlogos.org/logo/Tata-Group-logo-3840x2160.png"
              height={90}
            />
          </Col>
          <Col>
            <img
              src="https://www.pngmart.com/files/22/Jeep-Logo-PNG-File.png"
              height={90}
            />
          </Col>
          <Col>
            <img
              src="https://www.carlogos.org/car-logos/honda-logo-1700x1150.png"
              height={90}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Bodyy;
