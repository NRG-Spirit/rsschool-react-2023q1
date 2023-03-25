import React from 'react';
import './CardsList.css';
import { ICard } from '../../interfaces';
import Card from '../../components/Card/Card';

interface IProps {
  cards: ICard[];
}

class CardsList extends React.Component<IProps> {
  data: ICard[];
  constructor(props: IProps) {
    super(props);
    this.data = props.cards;
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
