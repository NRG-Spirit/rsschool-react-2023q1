import React from 'react';
import Header from './../../components/Header/Header';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <Header title={'Page not found - 404'} />
      <div className="not-found-page__img">
        <img src="./img/error404.jpg" alt="404" />
      </div>
    </div>
  );
}
