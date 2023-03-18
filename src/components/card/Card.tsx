import React from 'react';
import './Card.css';
import { ICard } from '../../interfaces';

interface IProps {
  card: ICard;
}

class Card extends React.Component<IProps> {
  card: ICard;
  constructor(props: IProps) {
    super(props);
    this.card = props.card;
  }
  render() {
    return (
      <div className="card">
        <div className="card__images">
          <img src={this.card.img.obverse} alt="coin" className="card__images_img" />
          <img src={this.card.img.reverse} alt="coin" className="card__images_img" />
        </div>
        <div className="card__info">
          <div className="card__title">{this.card.title}</div>
          <div className="card__year">{this.card.year}</div>
          <div className="card__denomination">Denomination: {this.card.denomination}</div>
          <div className="card__condition">Condition: {this.card.condition}</div>
          <div className="card__price">{this.card.price} $</div>
        </div>
      </div>
    );
  }
}
export default Card;
