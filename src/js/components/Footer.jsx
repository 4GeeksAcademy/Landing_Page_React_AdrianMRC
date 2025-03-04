import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
          </Col>
        </Row>
    </footer>
  );
};

export default Footer;