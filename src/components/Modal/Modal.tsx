import './Modal.css';
import Loader from '../../components/Loader/Loader';
import { useSearchBookQuery } from '../../redux/booksApi';
import React from 'react';

interface IProps {
  id: string;
  handleModal: (id: string) => void;
}

export default function Modal(props: IProps) {
  const { data, isLoading } = useSearchBookQuery(props.id);

  const imgLink =
    data?.volumeInfo?.imageLinks?.large ||
    data?.volumeInfo?.imageLinks?.medium ||
    data?.volumeInfo?.imageLinks?.thumbnail ||
    './img/cover.png';
  const author = data?.volumeInfo?.authors?.[0] || '';
  const price = data?.saleinfo?.listPrice?.amount
    ? `${data?.saleinfo?.listPrice?.amount}${data?.saleinfo?.listPrice?.currencyCode}`
    : 'unavailible';

  function handleModal() {
    props.handleModal('');
  }

  return (
    <div className="modal">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="modal__wrapper">
          <div className="modal__img">
            <img src={imgLink} alt="coin" className="card__image_img" />
          </div>
          <div className="modal__info">
            <div className="modal__title">
              <h2>{data?.volumeInfo.title}</h2>
            </div>
            <div className="modal__author">
              <h3>{author}</h3>
            </div>
            <div className="modal__publisher">Publisher: {data?.volumeInfo.publisher}</div>
            <div className="modal__published_date">
              Published date: {data?.volumeInfo.publishedDate}
            </div>
            <div className="modal__description">Description: {data?.volumeInfo.description}</div>
            <div className="modal__pages">Pages: {data?.volumeInfo.pageCount}</div>
            <div className="modal__rating">Rating: {data?.volumeInfo.averageRating}</div>
            <div className="modal__price">Price: {price}</div>
            <div className="modal__close" onClick={handleModal}></div>
          </div>
        </div>
      )}
    </div>
  );
}
