import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cslider.css"


const Cslider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        
          <>
      <div className="ms-5 me-5">
        <Carousel responsive={responsive}>
          <div className="cardS m-2">
      
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
          </div>

          <div className="cardS m-2">         
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
          </div>

          <div className="cardS m-2">         
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
          </div>

          <div className="cardS m-2">         
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
          </div>

          <div className="cardS m-2">         
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
          </div>

          <div className="cardS m-2">         
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
          </div>

          <div className="cardS m-2">         
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
          </div>
          <div className="cardS m-2">         
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
          </div>
        </Carousel>
      </div>
    </>
        
      )
    }

export default Cslider