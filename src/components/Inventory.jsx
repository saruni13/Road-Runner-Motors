import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import CarsListing from 'src/components/CarsListing';

const Inventory = () => {
  return (
    <div>
      {/* Use Link component from react-router-dom */}
      <ul>
        <li>
          <Link to="/CarsListing">Inventory</Link>
        </li>
      </ul>
      {/* Render the CarsListing component */}
      <CarsListing />
    </div>
  );
};

export default Inventory;
