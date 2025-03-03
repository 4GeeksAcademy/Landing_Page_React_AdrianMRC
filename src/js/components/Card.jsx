import React from 'react';
import PropTypes from 'prop-types';

const CustomCard = ({ title, text, image, buttonUrl }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img 
        src={image} 
        className="card-img-top" 
        alt={title}
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={buttonUrl} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired
};

export default CustomCard;