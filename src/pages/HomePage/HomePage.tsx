import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './HomePage.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardsList from '../../components/CardsList/CardsList';
import { searchBooks } from '../../http/api';
import { IBook } from '../../interfaces';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import Pagination from '../../components/Pagination/Pagination';

export default function HomePage() {
  const [foundedBooks, setFoundenBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState('');
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (localStorage.getItem('search')) {
      const searchSave = localStorage.getItem('search') || 'q';
      setSearch(searchSave);
      const pageSave = Number(localStorage.getItem('pageSave')) || 1;
      setPage(pageSave);
      const pagesSave = Number(localStorage.getItem('pagesSave')) || 0;
      setPages(pagesSave);
      handleSearchBooks(searchSave);
    }
  }, []);

  async function handleSearchBooks(search: string) {
    try {
      setIsLoading(true);
      const response = await searchBooks(search, 14, page);
      if (response.items) setFoundenBooks(response.items);
      setPages(response.totalItems / 14);
      localStorage.setItem('search', search);
      localStorage.setItem('pageSave', page.toString());
      localStorage.setItem('pagesSave', pages.toString());
      setIsLoading(false);
    } catch (e) {
      if (e instanceof Error) alert(e.message);
      setIsLoading(false);
    }
  }

  function handlePage(page: number) {
    setPage(page);
    handleSearchBooks(search);
  }

  function handleSearch(value: string) {
    setSearch(value);
    handlePage(1);
  }

  function handleModal(id: string): void {
    setIsModal(id);
  }

  return (
    <div className="home-page">
      {isModal && <div className="home-page__modal_background"></div>}
      <Header title={'Home'} />
      <div className="home-page_main">
        <SearchBar handleSearch={handleSearch} defaultValue={search} />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <CardsList cards={foundedBooks} handleModal={handleModal} />
            <Pagination handlePage={handlePage} page={page} pages={pages} />
          </>
        )}
        {isModal && <Modal id={isModal} handleModal={handleModal} />}
      </div>
    </div>
  );
}
