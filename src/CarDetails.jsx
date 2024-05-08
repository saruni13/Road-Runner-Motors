import React from 'react';

const CarDetails = ({ car }) => {
  return (
    <div className="car-details">
      <h1>{`${car.make} ${car.model} ${car.year}`}</h1>
      <img src={car.imageUrl} alt={`${car.make} ${car.model}`} />
      <p>{car.description}</p>
      <ul>
        <li>Price: ${car.price}</li>
        <li>Mileage: {car.mileage} kilometres</li>
        
      </ul>
      <button>Test Drive</button>
    </div>
  );
};

export default CarDetails;
