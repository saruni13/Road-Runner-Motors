import React, { useState, useEffect } from 'react';
import SearchBar from './Searchbar';
import LikedCars from './LikedCars';

const CarsListing = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState({});
  const [likedCars, setLikedCars] = useState([]);

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

  useEffect(() => {
    const applyFilters = () => {
      let filtered = cars.slice();
      if (filters.name) {
        filtered = filtered.filter(car => car.name.toLowerCase().includes(filters.name.toLowerCase()));
      }
      if (filters.engineType) {
        filtered = filtered.filter(car => car.engineType.toLowerCase().includes(filters.engineType.toLowerCase()));
      }
      if (filters.condition) {
        filtered = filtered.filter(car => car.condition.toLowerCase() === filters.condition);
      }
      setFilteredCars(filtered);
    };
    
    applyFilters();
  }, [cars, filters]);

  const handleFilter = (selectedFilters) => {
    setFilters(selectedFilters);
  };

  const handleLikeCars = (carId) => {
    const likedCar = cars.find(car => car.id === carId);
    if (likedCar) {
      // Check if the car is already liked
      const isCarAlreadyLiked = likedCars.some(car => car.id === carId);
      if (!isCarAlreadyLiked) {
        setLikedCars([...likedCars, likedCar]);
      } else {
        alert('This car is already liked.');
      }
    }
  };

  const releaseCar = (carId) => {
    setLikedCars(likedCars.filter(car => car.id !== carId));
  };

  return (
    <div className="car-listing">
      <h1>Car Listing</h1>
      <LikedCars likedCars={likedCars} releaseCar={releaseCar} />
      <SearchBar onFilter={handleFilter} />
     
      <ul>
        {filteredCars.map(car => (
          <li key={car.id} style={{background: 'white'}}>
            <h2>{car.brand} {car.name}</h2>
            <img src={car.picture} alt={`${car.brand} ${car.name}`} />
            <h2><p>{`${car.brand} ${car.name}`}</p></h2>
            <h2><strong><p>Price: ${car.price}</p></strong></h2>
            <p>Colour: {car.colour}</p>
            <p>Engine Type: {car.engineType}</p>
            <p>Condition: {car.condition}</p>
            <button onClick={() => handleLikeCars(car.id)}>Like</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default CarsListing;