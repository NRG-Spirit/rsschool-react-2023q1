import React from 'react';
import './CardsList.css';
import { ICard } from '../../interfaces';

class CardsList extends React.Component {
  data: ICard[];
  constructor(props: Readonly<object>) {
    super(props);
    this.data = [];
  }
  render() {
    return <div className="cardsList"></div>;
  }
}
export default CardsList;
