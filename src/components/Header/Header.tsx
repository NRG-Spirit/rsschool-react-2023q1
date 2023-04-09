import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

interface IProps {
  title: string;
}

export default function Header(props: IProps) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <nav className="header_nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/form">Form</NavLink>
      </nav>
    </div>
  );
}
