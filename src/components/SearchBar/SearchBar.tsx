import React, { useEffect } from 'react';
import './SearchBar.css';

export default function SearchBar() {
  const [searchData, setSearchData] = React.useState('');

  useEffect(() => {
    if (localStorage.getItem('search')) setSearchData(localStorage.getItem('search') as string);
  }, [searchData]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchData(e.target.value);
    localStorage.setItem('search', e.target.value);
  }
  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        type="text"
        name="searchBar"
        defaultValue={searchData}
        onChange={handleChange}
      />
    </div>
  );
}
