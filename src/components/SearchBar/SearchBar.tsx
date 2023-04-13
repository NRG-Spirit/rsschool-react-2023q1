import React, { useState } from 'react';
import './SearchBar.css';
import { setSearchState } from '../../redux/searchReducer';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(useAppSelector((state) => state.search.search) || '');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  function startSearch(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      dispatch(setSearchState(value));
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
        defaultValue={value}
      />
    </div>
  );
}
