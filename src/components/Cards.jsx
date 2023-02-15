import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cards = () => {
  return (
    <>

        <h3 className='mt-5'><span>Top Cars in India</span></h3>
   

<Container>
<div className='cont1 ms-5 me-5 mt-5' >

      <Row>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/suv.webp" />
      <Card.Body>
        <Card.Title>Top SUV's in India</Card.Title>
        <Card.Text>
          Mahindra Thar, XUV 700, Scorpio, Kia Seltos, MG Hector.
        </Card.Text>
        <Button variant="outline-dark">Show Cars</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/sedan.webp" />
      <Card.Body>
        <Card.Title>Top Sedan in India</Card.Title>
        <Card.Text>
          Volkswagen Virtus, Hyundai Verna, Honda City, Civic
        </Card.Text>
        <Button variant="outline-dark" className='cont6'>Show Cars</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/hatchbacks.webp" />
      <Card.Body>
        <Card.Title>Top Hatchbacks in India</Card.Title>
        <Card.Text>
          Suzuki Baleno, Swift, i20 Elite, i10 Grand Nios
        </Card.Text>
        <Button variant="outline-dark">Show Cars</Button>
      </Card.Body>
    </Card></Col>
      </Row>
      </div>

    </Container>

    <h3 className='mt-5'><span>Featured Cars</span></h3>
   


    <Container>
<div className='cont1 ms-5 me-5 mt-5' >

      <Row>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/thar.webp" />
      <Card.Body>
        <Card.Title>Mahindra Thar</Card.Title>
        <Card.Text>
          <b>12.12₹ Lakh</b> onwards
          <p>On road price, Pune</p>
        </Card.Text>
        <Button variant='outline-dark'>View Price Breakup</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/scorpio.webp" />
      <Card.Body>
        <Card.Title>Mahindra Scorpio</Card.Title>
        <Card.Text>
        <b>15.34₹ Lakh</b> onwards
          <p>On road price, Pune</p>
        </Card.Text>
        <Button variant="outline-dark">View Price Breakup</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/cretaa.webp" />
      <Card.Body>
        <Card.Title>Hyundai Creta</Card.Title>
        <Card.Text>
        <b>12.92₹ Lakh</b> onwards
          <p>On road price, Pune</p>
        </Card.Text>
        <Button variant="outline-dark">View Price Breakup</Button>
      </Card.Body>
    </Card></Col>
      </Row>
      </div>

    </Container>



    </>
  )
}

export default Cards