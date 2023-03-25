import React from 'react';
import './CardsList.css';
import { ICard } from '../../interfaces';
import Card from '../../components/Card/Card';

interface IProps {
  cards: ICard[];
}

class CardsList extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    console.log(this.props.cards);
    return (
      <div className="cardsList">
        {this.props.cards.map((el, idx) => {
          return <Card key={idx} card={el} />;
        })}
      </div>
    );
  }
}
export default CardsList;
