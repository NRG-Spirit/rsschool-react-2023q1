import React from 'react';
import './CardsList.css';
import { ICard } from '../../interfaces';
import data from '../../data/db.json';
import Card from '../../components/card/Card';

class CardsList extends React.Component {
  data: ICard[];
  constructor(props: Readonly<object>) {
    super(props);
    this.data = data.cards;
  }
  render() {
    return (
      <div className="cardsList">
        {this.data.map((el, idx) => {
          return <Card key={idx} card={el} />;
        })}
      </div>
    );
  }
}
export default CardsList;
