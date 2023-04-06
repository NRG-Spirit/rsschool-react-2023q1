import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './HomePage.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardsList from '../../components/CardsList/CardsList';
import { searchBooks } from '../../http/api';
import { IBook } from '../../interfaces';
import Loader from '../../components/Loader/Loader';

export default function HomePage() {
  const [foundedBooks, setFoundenBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSearchBooks(search: string) {
    setIsLoading(true);
    const response = await searchBooks(search);
    if (response.items) setFoundenBooks(response.items);
    setIsLoading(false);
    console.log(foundedBooks, response);
  }

  return (
    <div className="home-page">
      <Header title={'Home'} />
      <div className="home-page_main">
        <SearchBar handleSearch={handleSearchBooks} />
        {isLoading ? <Loader /> : <CardsList cards={foundedBooks} />}
      </div>
    </div>
  );
}
