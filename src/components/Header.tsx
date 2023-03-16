import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <nav className="header_nav">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT US</NavLink>
        </nav>
      </div>
    );
  }
}
export default Header;
