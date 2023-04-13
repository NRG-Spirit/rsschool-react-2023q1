import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './HomePage.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardsList from '../../components/CardsList/CardsList';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import Pagination from '../../components/Pagination/Pagination';
import { useSearchBooksQuery } from '../../redux/booksApi';
import { useAppSelector } from '../../hooks/reduxHooks';

export default function HomePage() {
  const [isModal, setIsModal] = useState('');
  const page = useAppSelector((state) => state.search.page) || 1;
  const [pages, setPages] = useState(0);
  const search = useAppSelector((state) => state.search.search) || '';
  const { data, isLoading } = useSearchBooksQuery(
    { search, page },
    {
      skip: search.length < 1,
    }
  );

  useEffect(() => {
    if (data?.totalItems) setPages(data.totalItems / 14);
  }, [data]);

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
        <SearchBar />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {data?.items && <CardsList cards={data.items} handleModal={handleModal} />}
            <Pagination pages={pages} />
          </>
        )}
        {isModal && <Modal id={isModal} handleModal={handleModal} />}
      </div>
    </div>
  );
}
