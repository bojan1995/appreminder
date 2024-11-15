import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle page navigation
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <header className="navbar">
      <div className="logo" onClick={() => handleNavigation('/')}>Reminder App</div>
      <nav className={`nav-links ${isOpen ? 'show' : ''}`}>
        <ul>
          <li><div onClick={() => handleNavigation('/')}>Words Reminder</div></li>
          <li><div onClick={() => handleNavigation('/coding')} className="secound-nav">Code Reminder</div></li>
        </ul>
      </nav>

      {/* Hamburger menu for mobile */}
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
