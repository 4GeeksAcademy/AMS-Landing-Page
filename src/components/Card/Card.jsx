import React from 'react';
import './Card.css';  // Importamos el archivo CSS específico del Card

const Card = ({ title, description, buttonText }) => {
  return (
    <div className="card h-100">
      <div className="card-img-top bg-light text-center py-5">
        <p className="text-muted">500 x 325</p>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer text-center">
        <button className="btn btn-primary">{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
