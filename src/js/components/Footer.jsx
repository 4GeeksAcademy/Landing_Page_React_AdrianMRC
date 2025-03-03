import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>About Us</h5>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Corporis provident veritatis cumque in temporibus nostrum.
            </p>
          </Col>

          <Col md={4}>
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                123 Street Name, City, Country
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope-fill me-2"></i>
                info@example.com
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone-fill me-2"></i>
                +1 234 567 890
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4 pt-3 border-top">
          <Col className="text-center">
            <p className="mb-0 text-muted">
              &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;