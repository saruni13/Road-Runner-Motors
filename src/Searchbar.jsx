import { useState } from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ cars }) => {
    // console.log(cars)
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <div id='Searchdiv'>
      <input
        type="text"
        placeholder="Search cars by name"
        value={searchTerm}
        onChange={handleChange}
      />
      <i className='bx bx-search bx-burst bx-flip-horizontal' ></i>
      </div>
      <div>
        {filteredCars.map((car) => (
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
    </div>
  );
};

Searchbar.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      brand: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      year: PropTypes.number,
      picture: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      colour: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Searchbar;
