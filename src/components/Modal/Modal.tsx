import React, { useEffect, useState } from 'react';
import './Modal.css';
import { IBook } from '../../interfaces';
import { getBook } from '../../http/api';
import Loader from '../../components/Loader/Loader';

interface IProps {
  id: string | undefined;
  handleModal: (id: string) => void;
}

export default function Modal(props: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [book, setBook] = useState<IBook>();
  const imgLink =
    book?.volumeInfo?.imageLinks?.large ||
    book?.volumeInfo?.imageLinks?.medium ||
    book?.volumeInfo?.imageLinks?.thumbnail ||
    './img/cover.png';
  const author = book?.volumeInfo?.authors?.[0] || '';
  const price = book?.saleinfo?.listPrice?.amount
    ? `${book?.saleinfo?.listPrice?.amount}${book?.saleinfo?.listPrice?.currencyCode}`
    : 'unavailible';

  useEffect(() => {
    const fetchData = async () => {
      if (props.id) {
        setIsLoading(true);
        const response = await getBook(props.id);
        setBook(response);
        setIsLoading(false);
      }
    };
    try {
      fetchData();
    } catch (e) {
      if (e instanceof Error) alert(e.message);
      setIsLoading(false);
    }
  }, [props.id]);

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
              <h2>{book?.volumeInfo.title}</h2>
            </div>
            <div className="modal__author">
              <h3>{author}</h3>
            </div>
            <div className="modal__publisher">Publisher: {book?.volumeInfo.publisher}</div>
            <div className="modal__published_date">
              Published date: {book?.volumeInfo.publishedDate}
            </div>
            <div className="modal__description">Description: {book?.volumeInfo.description}</div>
            <div className="modal__pages">Pages: {book?.volumeInfo.pageCount}</div>
            <div className="modal__rating">Rating: {book?.volumeInfo.averageRating}</div>
            <div className="modal__price">Price: {price}</div>
            <div className="modal__close" onClick={handleModal}></div>
          </div>
        </div>
      )}
    </div>
  );
}
