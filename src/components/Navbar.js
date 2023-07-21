import React from 'react';

const Navbar = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-title" onClick={handleRefresh}>
        MellowMind
      </div>
    </nav>
  );
};

export default Navbar;
