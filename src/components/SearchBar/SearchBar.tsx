import React, { useEffect, useState } from 'react';
import './SearchBar.css';

interface IProps {
  handleSearch: (search: string) => Promise<void>;
  handlePage: (page: number) => void;
}

export default function SearchBar(props: IProps) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (localStorage.getItem('search')) {
      const search = localStorage.getItem('search') as string;
      setValue(search);
    }
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  function startSearch(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      props.handlePage(1);
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
        defaultValue={value}
      />
    </div>
  );
}
