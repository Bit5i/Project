import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardSlider = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
          <div className="cardS">
            <img
              src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2023/02/LE-JOUR-SE-LEVE-1.webp"
              alt="product"
              height={[200]}
              width={[]}
            />
            <h6 className="w-75 ">
              Le Jour Se Leve By Louis Vuitton 2ml Official Sample Spray
            </h6>
            <p className="price">$950.00</p>
          </div>

          <div className="cardS">
            <img
              src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2023/02/LE-JOUR-SE-LEVE-1.webp"
              alt="product"
              height={[200]}
              width={[]}
            />
            <h5>Le Jour Se Leve By Louis Vuitton 2ml Official Sample Spray</h5>
            <p className="price">$950.00</p>
          </div>

          <div className="cardS">
            <img
              src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2023/02/LE-JOUR-SE-LEVE-1.webp"
              alt="product"
              height={[200]}
              width={[]}
            />
            <h5>Le Jour Se Leve By Louis Vuitton 2ml Official Sample Spray</h5>
            <p className="price">$950.00</p>
          </div>

          <div className="cardS">
            <img
              src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2023/02/LE-JOUR-SE-LEVE-1.webp"
              alt="product"
              height={[200]}
              width={[]}
            />
            <h5>Le Jour Se Leve By Louis Vuitton 2ml Official Sample Spray</h5>
            <p className="price">$950.00</p>
          </div>

          <div className="cardS">
            <img
              src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2023/02/LE-JOUR-SE-LEVE-1.webp"
              alt="product"
              height={[200]}
              width={[]}
            />
            <h5 className="w-75">
              Le Jour Se Leve By Louis Vuitton 2ml Official Sample Spray
            </h5>
            <p className="price">$950.00</p>
          </div>

          <div className="cardS">
            <img
              src="https://splashfragranceweb.b-cdn.net/wp-content/uploads/2023/02/LE-JOUR-SE-LEVE-1.webp"
              alt="product"
              height={[200]}
              width={[]}
            />
            <h5>Le Jour Se Leve By Louis Vuitton 2ml Official Sample Spray</h5>
            <p className="price">$950.00</p>
          </div>

          <div className="cardS">Item 3</div>
          <div className="cardS">Item 4</div>
        </Carousel>
      </div>
    </>
  )
}

export default CardSlider