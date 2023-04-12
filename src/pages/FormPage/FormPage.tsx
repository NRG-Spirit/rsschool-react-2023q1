import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './FormPage.css';
import CardsList from '../../components/CardsList/CardsList';
import Form from '../../components/Form/Form';
import { ICard } from '../../interfaces';

export default function FormPage() {
  const [activeCards, setActiveCard] = useState<ICard[]>([]);

  function addCard(card: ICard) {
    let newActiveCards = activeCards || [];
    newActiveCards = newActiveCards.concat(card);
    setActiveCard(newActiveCards);
  }
  return (
    <div className="form-page">
      <Header title={'Form'} />
      <Form addCard={addCard} id={activeCards.length + 1} />
      <CardsList cards={activeCards} />
    </div>
  );
}
