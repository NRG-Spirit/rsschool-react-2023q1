import React from 'react';
import './CardsList.css';
import { IBook } from '../../interfaces';
import Card from '../../components/Card/Card';

interface IProps {
  cards: IBook[];
}

export default function CardsList(props: IProps) {
  return (
    <div className="cardsList">
      {props.cards.map((el, idx) => {
        return <Card key={idx} card={el} />;
      })}
    </div>
  );
}
