import React from 'react';
import './Card.css';
import { ICard } from '../../interfaces';

interface IProps {
  card: ICard;
}

export default function Card(props: IProps) {
  return (
    <div className="card">
      <div className="card__images">
        <img src={props.card.img.obverse} alt="coin" className="card__images_img" />
        <img src={props.card.img.reverse} alt="coin" className="card__images_img" />
      </div>
      <div className="card__info">
        <h4 className="card__title">{props.card.title}</h4>
        <div className="card__year">{props.card.year}</div>
        <div className="card__denomination">Denomination: {props.card.denomination}</div>
        <div className="card__condition">Condition: {props.card.condition}</div>
        <div className="card__price">{props.card.price} $</div>
      </div>
    </div>
  );
}
