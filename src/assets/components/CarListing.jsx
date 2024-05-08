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
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <h2>{car.make} {car.model} {car.year}</h2>
            <img src={require(`../images/${car.image}`)} alt={`${car.make} ${car.model} ${car.year}`} />
            <h2><p>{`${car.make} ${car.model} ${car.year}`}</p></h2>
            <h2><p>Price: ${car.price}</p></h2>
            <p>Mileage: {car.mileage} miles</p>
            <p>Features: {car.features}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsListing;