import React from 'react';
import './Card.css';
import { IBook } from '../../interfaces';

interface IProps {
  card: IBook;
  handleModal: (is: string) => void;
}

export default function Card(props: IProps) {
  const imgLink = props.card.volumeInfo?.imageLinks?.thumbnail || './img/cover.png';
  const author = props.card.volumeInfo?.authors?.[0] || '';

  function handleModal() {
    props.handleModal(props.card.id);
  }
  return (
    <div className="card" onClick={handleModal}>
      <div className="card__image">
        <img src={imgLink} alt="cover" className="card__image_img" />
      </div>
      <div className="card__info">
        <h4 className="card__title">{props.card.volumeInfo.title}</h4>
        <h5 className="card__author">{author}</h5>
      </div>
    </div>
  );
}
