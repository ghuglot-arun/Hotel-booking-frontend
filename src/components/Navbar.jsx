import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleMyBooking = () => {
    navigate('/my-booking');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          AG - Booking
        </Link>

        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/rooms" onClick={toggleMenu}>Rooms</Link></li>
            <li><Link to="/facilities" onClick={toggleMenu}>Facilities</Link></li>
            <li><Link to='/contact'onClick={toggleMenu} >Contact</Link></li>
          </ul>

          <div className="auth-section">
            {isSignedIn ? (
              <div className="auth-actions">
                <button className="btn booking-btn" onClick={handleMyBooking}>My Booking</button>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <button className="btn login-btn" onClick={openSignIn}>Log In</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
