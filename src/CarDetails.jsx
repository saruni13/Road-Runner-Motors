import React from 'react';

const CarDetails = ({ cars }) => {
  return (
    <div>
      {cars.map((car) => (
        <div key={car.id} className="car-details">
          <h1>{`${car.make} ${car.model} ${car.year}`}</h1>
          <img src={car.imageUrl} alt={`${car.make} ${car.model}`} />
          <p>{car.description}</p>
          <ul>
            <li>Price: ${car.price}</li>
            <li>Colour: {car .colour}</li>
          </ul>
          <button>Test Drive</button>
        </div>
      ))}
    </div>
  );
};

export default CarDetails;