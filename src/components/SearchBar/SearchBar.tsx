import React, { useState } from 'react';
import './SearchBar.css';

interface IProps {
  handleSearch: (search: string) => void;
  defaultValue: string;
}

export default function SearchBar(props: IProps) {
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  function startSearch(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      props.handleSearch(value);
    }
  }
  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        type="text"
        name="searchBar"
        onChange={handleChange}
        onKeyUp={startSearch}
        defaultValue={props.defaultValue}
      />
    </div>
  );
}
