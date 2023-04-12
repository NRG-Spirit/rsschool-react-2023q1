import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './HomePage.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardsList from '../../components/CardsList/CardsList';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import Pagination from '../../components/Pagination/Pagination';
import { useSearchBooksQuery } from '../../redux/booksApi';
import { setSearchState, setPageState } from '../../redux/searchReducer';
import { useAppDispatch, useAppSelector } from '../../hooks/Reduxhooks';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const [isModal, setIsModal] = useState('');
  const [page, setPage] = useState(useAppSelector((state) => state.search.page) || 1);
  const [pages, setPages] = useState(0);
  const [search, setSearch] = useState(useAppSelector((state) => state.search.search) || '');
  const { data, isLoading } = useSearchBooksQuery(search, {
    skip: search.length < 1,
  });

  useEffect(() => {
    if (data?.totalItems) setPages(data.totalItems / 14);
  }, [data]);

  function handlePage(page: number) {
    setPage(page);
    dispatch(setPageState(page));
  }

  function handleSearch(value: string) {
    setSearch(value);
    dispatch(setSearchState(value));
  }

  function handleModal(id: string): void {
    setIsModal(id);
  }

  return (
    <div className="home-page">
      {isModal && (
        <div
          className="home-page__modal_background"
          onClick={() => {
            setIsModal('');
          }}
        ></div>
      )}
      <Header title={'Home'} />
      <div className="home-page_main">
        <SearchBar handleSearch={handleSearch} defaultValue={search} />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {data?.items && <CardsList cards={data.items} handleModal={handleModal} />}
            <Pagination handlePage={handlePage} page={page} pages={pages} />
          </>
        )}
        {isModal && <Modal id={isModal} handleModal={handleModal} />}
      </div>
    </div>
  );
}
