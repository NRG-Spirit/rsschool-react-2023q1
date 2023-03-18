import React from 'react';
import Header from '../../components/Header/Header';
import './HomePage.css';
import SearchBar from '../../components/SearchBar/SearchBar';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Header title={'Home'} />
        <div className="home-page_main">
          <SearchBar />
        </div>
      </div>
    );
  }
}
export default HomePage;
