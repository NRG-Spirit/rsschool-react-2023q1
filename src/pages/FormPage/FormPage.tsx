import React from 'react';
import Header from '../../components/Header/Header';
import './FormPage.css';
import CardsList from '../../components/CardsList/CardsList';
import Form from '../../components/Form/Form';
import { ICard } from '../../interfaces';

class FormPage extends React.Component {
  state = {
    activeCards: [] as ICard[],
  };
  addCard(card: ICard) {
    const newState = this.state;
    newState.activeCards = newState.activeCards.concat(card);
    this.setState(newState);
    console.log(this.state);
  }
  render() {
    return (
      <div className="form-page">
        <Header title={'Form'} />
        <Form addCard={this.addCard.bind(this)} id={this.state.activeCards.length + 1} />
        <CardsList cards={this.state.activeCards} />
      </div>
    );
  }
}
export default FormPage;
