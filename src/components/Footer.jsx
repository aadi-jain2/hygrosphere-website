import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="logo-icon">💧</span>
              Hygrosphere
            </h3>
            <p className="footer-description">
              A three-in-one solar water station for off-grid communities. 
              Clean water through atmospheric harvesting, solar disinfection, and filtration.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/impact">Impact</Link></li>
              <li><Link to="/technology">Technology</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>About</h4>
            <ul className="footer-links">
              <li><Link to="/team">Team & Story</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Impact</h4>
            <p className="footer-sdgs">
              Supporting SDG 6 (Clean Water), SDG 3 (Health), and SDG 13 (Climate Action)
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Hygrosphere. Built for the Conrad Challenge.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

