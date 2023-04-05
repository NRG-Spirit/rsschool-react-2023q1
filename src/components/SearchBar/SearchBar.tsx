import React from 'react';
import './SearchBar.css';

interface IProps {
  handleSearch: (search: string) => Promise<void>;
}

export default function SearchBar(props: IProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.handleSearch(e.target.value);
  }
  return (
    <div className="searchBar">
      <input className="searchBar__input" type="text" name="searchBar" onChange={handleChange} />
    </div>
  );
}
