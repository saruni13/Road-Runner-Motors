import React from 'react';
import { Link } from 'react-router-dom';
import './ContactForm.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1>Welcome to Road Runner Motors</h1>
        <h3>Helping you Drive your dream</h3>
        <h3>Buy Your Next Car</h3>
        <p>Explore our wide range of cars available for sale.</p>
      </div>

      {/* Picture slots in two rows of three */}
      <div className="homepage-pictures">
        <div className="picture-row">
          <div className="picture-slot">
            <img src="https://i.pinimg.com/736x/33/e9/92/33e992fd5da153ecb712229e87f3bc3b.jpg" alt="Image 1" />
          </div>
          <div className="picture-slot">
            <img src="data:image/png;base64,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" alt="Image 2" />
          </div>
          <div className="picture-slot">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEgd6mLmAEpjPejiEceoA8CqHeXwaOdvSlvJd95Ypsg&s" alt="Image 3" />
          </div>
        </div>
        <div className="picture-row">
          <div className="picture-slot">
            <img src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/5ffb143b80eb2e2673b50d4900c69ff1/large.jpg" alt="Image 4" />
          </div>
          <div className="picture-slot">
            <img src="https://logolook.net/wp-content/uploads/2022/10/Volkswagen-Logo-2000-500x281.png" alt="Image 5" />
          </div>
          <div className="picture-slot">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7u8ujMHhpFAysccZ1gvf7_ycdllqjrtZF9XAcKzrBjw&s" alt="Image 6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
