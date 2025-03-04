import React from 'react';
import PropTypes from 'prop-types';

const CustomCard = ({ name, image, status, species, location, buttonUrl }) => {
  const statusColor = {
    Alive: 'bg-success',
    Dead: 'bg-danger',
    unknown: 'bg-secondary'
  };

  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={image} 
        className="card-img-top img-fluid" 
        alt={name}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="d-flex align-items-center mb-2">
          <span className={`badge ${statusColor[status]} me-2`}>&nbsp;</span>
          <span>{status} - {species}</span>
        </div>
        <p className="card-text text-muted small">
          {location}
        </p>
        <a href={buttonUrl} className="btn btn-primary mt-auto align-self-start">
        API del personaje
        </a>
      </div>
    </div>
  );
};

CustomCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  location: PropTypes.string,
  buttonUrl: PropTypes.string
};

export default CustomCard;