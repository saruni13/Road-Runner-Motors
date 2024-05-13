import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="footer-nav">
              {/* Use Link components for client-side routing */}
              <li>
                <ul className="footer-nav">
                  <li>
                    <Link to="/about🔥🔥">About Road Runner Motors</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-of-service">Terms of Service</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <h4>Find us @</h4>
            <ul className="social-links">
              <li>
                <a href="https://facebook.com">
                  <i className="facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <i className="twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <i className="instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div>
            <p className="copyright">
              Road Runner Motors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
