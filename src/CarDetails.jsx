import React, { useState, useEffect } from 'react';

const CarDetails = () => {
  const [cars, setCars] = useState([]);
  
  useEffect(() => {
    fetch('db.json')
      .then(response => response.json())
      .then(data => setCars(data.Cars))
      .catch(error => {
        console.error('Error fetching cars:', error);
      });
  }, []); 

  return (
    <div>
      {cars.map((car) => (
        <div key={car.id} className="car-details">
          <h1>{`${car.brand} ${car.name} ${car.year}`}</h1>
          <img src={car.picture} alt={`${car.brand} ${car.name}`} />
          <p>{car.description}</p>
          <ul>
            <li>Price: ${car.price}</li>
            <li>Colour: {car.colour}</li>
          </ul>
          <button>Test Drive</button>
        </div>
      ))}
    </div>
  );
};

export default CarDetails;
