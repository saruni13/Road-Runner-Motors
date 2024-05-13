import React from 'react';
import ContactForm from './Components/ContactForm.jsx';
import ContactUs from './Components/ContactUs.jsx'; 

const App = () => {
  return (
    <div className="app">
      <h1>Contact Form</h1>
      <div className="contact-container">
        <div className="form-wrapper">
          <ContactForm />
        </div>
        
        <div className="contact-info">
          <h1>Contact us</h1>
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default App;