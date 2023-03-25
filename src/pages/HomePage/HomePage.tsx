import React from 'react';
import Header from '../../components/Header/Header';
import './HomePage.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardsList from '../../components/CardsList/CardsList';
import data from '../../data/db.json';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Header title={'Home'} />
        <div className="home-page_main">
          <SearchBar />
          <CardsList cards={data.cards} />
        </div>
      </div>
    );
  }
}
export default HomePage;
