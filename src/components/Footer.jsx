import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          {/* column1 */}
          <div className='col'>
            <img src='logo-white.png' width="100px" height="100px"></img>
            <p>Language: English, Hindi</p>
            
            <ul className='list-unstyled'>
              <li>About Us</li>
              <li>Careers</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          {/* column2 */}
          <div className='col mt-5'>
            <h5>Download Mobile App</h5>
            <ul className='list-unstyled mt-3'>
              <li><img src='./img/playstore.svg' width="150px"/></li>
              <li className='mt-3'><img src='./img/appstore.svg' width="150px"/></li>
              {/* <li>12, street, south pune</li> */}
            </ul>
          </div>
          {/* column3 */}
          <div className='col mt-5'>
            <h5>Contact us</h5>
            <ul className='list-unstyled'>
              <li>Toll Free - 1800 41 99099</li>
              <li>Email - feedback@4wheels.com</li>
              <li>Visitors Agreement & Policy</li>
              <li>Book a Visit</li>

              <li>Used cars Buisness</li>

            </ul>
          </div>
        </div>
        <hr />
        <div style={{width:"80%"}} className="mx-auto">
          <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom ms-5 me-5">
            <div class="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </section>
        </div>
        <div className='row'>
          <p className='col-sm'>
            &copy;{new Date().getFullYear()} 4WHEELS | All rights reserved | Privacy
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default Footer