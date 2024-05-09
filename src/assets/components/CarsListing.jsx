import React, { useState, useEffect } from 'react';

const CarsListing = () => {
  const [cars, setCars] = useState([]);
  const [selectedCars, setSelectedCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCars(data.Cars); 
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="car-listing">
      <h1>Car Listing</h1>
      <ul>
        {cars.map(car => (
          <li key={car.id} style={{background: 'black'}}>
            <h2>{car.brand} {car.name}</h2>
            <img src={car.picture} alt={`${car.brand} ${car.name}`} />
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

const styles={}


export default CarsListing;