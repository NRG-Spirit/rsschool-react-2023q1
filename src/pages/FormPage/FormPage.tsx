import Header from '../../components/Header/Header';
import './FormPage.css';
import CardsList from '../../components/CardsList/CardsList';
import Form from '../../components/Form/Form';
import { useAppSelector } from '../../hooks/reduxHooks';
import React from 'react';

export default function FormPage() {
  const books = useAppSelector((state) => state.form);

  return (
    <div className="form-page">
      <Header title={'Form'} />
      <Form id={books.length + 1} />
      <CardsList books={books} handleModal={null} />
    </div>
  );
}
