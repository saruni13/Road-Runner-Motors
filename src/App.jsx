import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import About from './footer/About';
import PrivacyPolicy from './footer/PrivacyPolicy';
import TermsOfService from './footer/TermsOfService';
import Footer from './footer/footer';


function App() {
  return (
    <Router>
      <div className="App">
        

        {/* Routes */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
