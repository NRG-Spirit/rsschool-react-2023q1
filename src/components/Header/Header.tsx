import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

interface IProps {
  title: string;
}

interface IHeader {
  title: string;
}

class Header extends React.Component<IProps, IHeader> {
  constructor(props: IProps) {
    super(props);
    this.state = { title: props.title };
  }
  render() {
    return (
      <div className="header">
        <h1>{this.state.title}</h1>
        <nav className="header_nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/form">Form</NavLink>
        </nav>
      </div>
    );
  }
}
export default Header;
