import React from 'react';
import './CardsList.css';
import { IBook } from '../../interfaces';
import Card from '../../components/Card/Card';

interface IProps {
  books: IBook[];
  handleModal: ((id: string) => void) | null;
}

export default function CardsList(props: IProps) {
  return (
    <div className="cardsList">
      {props.books.map((el, idx) => {
        return <Card key={idx} card={el} handleModal={props.handleModal} />;
      })}
    </div>
  );
}
