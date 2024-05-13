
import React from 'react';

const LikedCars = ({ likedCars , releaseCar}) => {
  return (
    <div className="liked-cars">
      <h2>Liked Cars</h2>
      <ul>
        {likedCars.map(car => (
           <li key={car.id} style={{background: 'black'}}>
           <h2>{car.brand} {car.name}</h2>
           <img src={car.picture} alt={`${car.brand} ${car.name}`} />
           <h2><p>{`${car.brand} ${car.name}`}</p></h2>
           <h2><strong><p>Price: ${car.price}</p></strong></h2>
           <p>Colour: {car.colour}</p>
           <p>Engine Type: {car.engineType}</p>
           <p>Condition: {car.condition}</p>
           <button onClick={() => releaseCar(car.id)}>Release</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedCars;