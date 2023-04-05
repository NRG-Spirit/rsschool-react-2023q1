import React from 'react';
import './Card.css';
import { IBook } from '../../interfaces';

interface IProps {
  card: IBook;
}

export default function Card(props: IProps) {
  const imgLink = props.card.volumeInfo?.imageLinks?.thumbnail || './img/cover.png';
  const author = props.card.volumeInfo?.authors?.[0] || '';
  return (
    <div className="card">
      <div className="card__image">
        <img src={imgLink} alt="coin" className="card__image_img" />
      </div>
      <div className="card__info">
        <h4 className="card__title">{props.card.volumeInfo.title}</h4>
        <div className="card__author">{author}</div>
      </div>
    </div>
  );
}
