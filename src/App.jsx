// import React from 'react';
import CarDetails from './CarDetails';
import Searchbar from './Searchbar';
import carsData from './db.json'; // Assuming your data is stored in db.json
import './App.css'
import Homepage from './Homepage';

const App = () => {
  return (
    <div>
      <Homepage />
      <Searchbar cars={carsData.Cars} />
      <CarDetails />
    </div>
  );
};

export default App;
