import React from "react";
import './ContactForm.css';


const Services = () => {
  return (
    <div>
      <h2>Services</h2>
      <div className="cont">
        {/* First Service */}
        <div className="service">
          <div className="service-info">
            <h3>Repair Services</h3>
            <ul>
              <li>Exhaust system repairs</li>
              <li>Wheel Alignment</li>
              <li>Transmission repairs</li>
              <li>Brake system repairs</li>
            </ul>
          </div>
          <div className="service-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mQTp8UKwbBIgWf46YWbevykuJh45Q6c5DnlabEJoCA&s" alt="Repairs" />
          </div>
        </div>

        {/* Second Service */}
        <div className="service">
          <div className="service-info">
            <h3>Tune-Ups:</h3>
            <ul>
              <li>Spark plug replacement</li>
              <li>Ignition system tune-up</li>
              <li>Fuel system cleaning</li>
              <li>Timing belt replacement</li>
            </ul>
          </div>
          <div className="service-image">
            <img src="https://hometowneautorepairandtireofwoodbridge.com/blog/wp-content/uploads/2021/10/Parts-on-an-engine.jpg" alt="Service 2" />
          </div>
        </div>

        {/* Third Service */}
        <div className="service">
          <div className="service-info">
            <h3>Performance Upgrades:</h3>
            <ul>
              <li>Installation of aftermarket parts (performance exhaust, cold air intake, etc.)
</li>
              <li>Engine tuning and reprogramming</li>
            </ul>
          </div>
          <div className="service-image">
            <img src="https://cdn.shopify.com/s/files/1/0529/8467/6535/files/c6-corvette-engine_480x480.png?v=1621435437" alt="Service 3" />
          </div>
        </div>

        {/* Fourth Service */}
        <div className="service">
          <div className="service-info">
            <h3>Bodywork and Cosmetic Services:</h3>
            <ul>
              <li>Dent repair</li>
              <li>Paint touch-ups</li>
              <li>Detailing services (interior and exterior cleaning)</li>
            </ul>
          </div>
          <div className="service-image">
            <img src="https://www.shutterstock.com/image-photo/happy-owner-excited-black-man-260nw-2007308939.jpg" alt="Service 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
