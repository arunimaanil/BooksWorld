import React from "react";
import './Footer.css'

import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      {/* <Container>
        <Row>
          <Col className="text-center py-3">Arunima Anil</Col>
        </Row>
      </Container> */}
      <div className='footer'>
        <div className='about'>
          <h5>About</h5>
          <ul>
            <li><a href="">Who are we</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Work With us</a></li>
            <li><a href="">Report Fraud</a></li>
            <li><a href="">Investor Relationships</a></li>
            <li><a href="">Blog</a></li>
          </ul>
        </div>
        <div className='branches'>
          <h5>Branches</h5>
          <ul>
            <li>Kochi</li>
            <li>Trivandrum</li>
            <li>Bangalore</li>
            <li>Hyderabad</li>
            <li>Pune</li>
            <li>Noida</li>
          </ul>
        </div>
        <div className='learn'>
          <h5>Learn More</h5>
          <ul>
            <li><a href="">Privacy</a></li>
            <li><a href="">Security</a></li>
            <li><a href="">Terms</a></li>
            <li><a href="">Site Map</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
