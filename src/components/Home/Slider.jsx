import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const contentStyle = {
  // height: '160px',
  width: "100%" ,
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Slider = () => {
  return (
    <>
        <Carousel className='mt-5'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.kayak.com/news/wp-content/uploads/sites/19/2019/05/perfectrentalcar_blog_updated_2-1912x600.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.ctfassets.net/2sam6k0rncvg/5jB1yO0HQgS6z6153Kzdvw/76acb25f5bef27862270a724bdd32ecf/best-family-cars-in-india.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.mychoize.com/blog/wp-content/uploads/2021/02/Rent-A-Car-for-Family-Road-Trip.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    </>
  )
}

export default Slider