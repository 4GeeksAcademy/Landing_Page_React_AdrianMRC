import React from 'react';
import { Button } from 'react-bootstrap'; 

const Jumbotron = () => (
  <div className="p-5 bg-light rounded-3 mb-4">
    <h1 className="display-4">A Warm Welcome!</h1>
    <p className="lead">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, 
      in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis 
      illo aspernatur vitae fugiat numquam repellat.
    </p>
    <Button variant="primary">Call to action!</Button>
  </div>
);

export default Jumbotron;