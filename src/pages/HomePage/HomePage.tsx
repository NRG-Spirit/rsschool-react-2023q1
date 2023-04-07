import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './HomePage.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardsList from '../../components/CardsList/CardsList';
import { searchBooks } from '../../http/api';
import { IBook } from '../../interfaces';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';

export default function HomePage() {
  const [foundedBooks, setFoundenBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState('');

  async function handleSearchBooks(search: string) {
    try {
      setIsLoading(true);
      const response = await searchBooks(search);
      if (response.items) setFoundenBooks(response.items);
      setIsLoading(false);
    } catch (e) {
      if (e instanceof Error) alert(e.message);
      setIsLoading(false);
    }
  }

  function handleModal(id: string): void {
    setIsModal(id);
  }

  return (
    <div className="home-page">
      <Header title={'Home'} />
      <div className="home-page_main">
        <SearchBar handleSearch={handleSearchBooks} />
        {isLoading ? <Loader /> : <CardsList cards={foundedBooks} handleModal={handleModal} />}
        {isModal && <Modal id={isModal} handleModal={handleModal}/>}
      </div>
    </div>
  );
}
