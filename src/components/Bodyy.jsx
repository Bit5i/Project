import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import $ from 'jquery';
// import Fade from 'react-reveal/Fade'; 


const Bodyy = () => {
  return (
    <>
    
        <img className='css' src="./img/bmw.jpg" alt="logo" />
        
        <div className='p1'/>
        <h1 className='top'> All brands</h1>
        
        {/* $(window).scroll(function(){
        $(".top").css("opacity", 1 - $(window).scrollTop() / 250)
        }); */}

        {/* <Table striped bordered hover>
      
        <tr>

          <th><img src="/img/MG1.png" height={130}/></th>
          <th><img src="/img/suzukii.png" height={130}/></th>
          <th><img src="/img/rr.png" height={130}/></th>
          <th><img src="/img/vw.png" height={130}/></th>
          <th><img src="/img/hynd.png" height={130}/></th>
          <th><img src="/img/mahi.png" height={130}/></th>
          <th><img src="/img/kia.png" height={130}/></th>         
        </tr>
      
      
        
        <tr>
        <th><img src="/img/benz.jpg" height={130}/></th>
          <th><img src="/img/suzukii.png" height={130}/></th>
          <th><img src="/img/rr.png" height={130}/></th>
          <th><img src="/img/vw.png" height={130}/></th>
          <th><img src="/img/hynd.png" height={130}/></th>
          <th><img src="/img/mahi.png" height={130}/></th>
          <th><img src="/img/kia.png" height={130}/></th> 
        </tr>
        
      
    </Table> */}

<Container>
      <Row>
        <Col><img src="/img/benz.jpg" height={90}/></Col>
        <Col><img src="/img/benz.jpg" height={90}/></Col>
        <Col><img src="/img/benz.jpg" height={90}/></Col>
        <Col><img src="/img/benz.jpg" height={90}/></Col>
        <Col><img src="/img/benz.jpg" height={90}/></Col>
        <Col><img src="/img/benz.jpg" height={90}/></Col>
      </Row>
    <div className='space mt-5'/>
      <Row>
        <Col><img src="/img/benz.jpg" height={90}/></Col>
        <Col><img src="/img/benz.jpg" height={90}/></Col>
        <Col><img src="/img/benz.jpg" height={90}/></Col>
        <Col><img src="/img/benz.jpg" height={90}/></Col>
        <Col><img src="/img/benz.jpg" height={90}/></Col>
        <Col><img src="/img/benz.jpg" height={90}/></Col>
      </Row>
    </Container>

    


    </>
  )
}

export default Bodyy