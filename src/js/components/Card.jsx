import React from 'react';
import PropTypes from 'prop-types';

const CustomCard = ({ title, text, image, buttonUrl }) => (
  <div className="card h-100 shadow-sm">
    <img 
      src={image} 
      className="card-img-top img-fluid" 
      alt={title}
      style={{ height: "200px", objectFit: "cover" }}
    />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{title}</h5>
      <p className="card-text flex-grow-1">{text}</p>
      <a href={buttonUrl} className="btn btn-primary mt-auto align-self-start">
        ¿Más Info?
      </a>
    </div>
  </div>
);

CustomCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  buttonUrl: PropTypes.string
};

export default CustomCard;