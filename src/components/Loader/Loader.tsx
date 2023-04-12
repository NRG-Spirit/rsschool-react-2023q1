import React from 'react';
import './Loader.css';

export default function Loader() {
  return (
    <div className="loader" data-testid="loader-test">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      L O A D I N G . . .
    </div>
  );
}
