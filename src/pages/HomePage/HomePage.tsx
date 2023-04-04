import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './HomePage.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardsList from '../../components/CardsList/CardsList';
import data from '../../data/db.json';
import { searchBooks } from '../../http/api';
import { IBook } from '../../interfaces';

export default function HomePage() {
  const [foundedBooks, setFoundenBooks] = useState<IBook[]>([]);

  async function handleSearchBooks(search: string) {
    const dat = await searchBooks(search);
    if (dat.items) setFoundenBooks(dat.items);
  }

  return (
    <div className="home-page">
      <Header title={'Home'} />
      <div className="home-page_main">
        <SearchBar handleSearch={handleSearchBooks} />
        <CardsList cards={data.cards} />
      </div>
    </div>
  );
}
