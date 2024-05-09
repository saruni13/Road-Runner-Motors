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
        setCars(data.Cars); // Assuming the data is structured as an object with a Cars array
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchData();
  }, []);

  const orderCar = (car, quantity) => {
    // This function will handle the order functionality
    console.log(`Ordering ${quantity} ${car.brand} ${car.name}`);
    // Implement your order logic here
  };

  const handleOrder = () => {
    // This function will handle the order process
    let totalCost = 0;
    selectedCars.forEach((car) => {
      totalCost += car.price * selectedCars[car].quantity;
    });
    console.log(`Total cost: ${totalCost}`);
    // Implement your order process here
  };

  return (
    <div className="car-listing">
      <h1>Car Listing</h1>
      <form>
        {selectedCars.map((car, index) => (
          <div key={index}>
            <h3>{car.brand} {car.name}</h3>
            <input type="number" placeholder="Quantity" value={selectedCars[car].quantity} onChange={(e) => handleQuantityChange(car, e.target.value)} />
            
          </div>
        ))}
        <button onClick={() => handleRemoveCar(car)}>Remove</button>
        <button onClick={handleOrder}>Place Order</button>
      </form>
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
            <button onClick={() => orderCar(car, 1)}>Order</button>
          </li>
        ))}
      </ul>
      <h2>Order Form</h2>
      <form>
        {selectedCars.map((car, index) => (
          <div key={index}>
            <h3>{car.brand} {car.name}</h3>
            <input type="number" placeholder="Quantity" value={selectedCars[car].quantity} onChange={(e) => handleQuantityChange(car, e.target.value)} />
            <button onClick={() => handleRemoveCar(car)}>Remove</button>
          </div>
        ))}
        <button onClick={handleOrder}>Place Order</button>
      </form>
    </div>
  );
};

const styles={}


export default CarsListing;