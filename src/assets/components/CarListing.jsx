import React, { useState, useEffect } from 'react';

const CarsListing = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('db.json')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  return (
    <div>
      <h1>Car Listing</h1>
      {error && <p>{error}</p>}
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <h2>{car.brand} {car.name}</h2>
            <img src={car.image} alt={`${car.brand} ${car.name}`} />
            <h2><p>{`${car.brand} ${car.name}`}</p></h2>
            <h2><strong><p>Price: ${car.price}</p></strong></h2>
            <p>Colour: {car.colour}</p>
            <p>Engine Type: {car.engineType}</p>
            <p>Condition: {car.condition}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default CarsListing;