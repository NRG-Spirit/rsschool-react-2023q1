import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  savedData: string;
  constructor(props: Readonly<object>) {
    super(props);
    this.savedData = localStorage.getItem('search') || '';
  }
  inputChange(e: Event | undefined): void {
    if (e?.target instanceof HTMLInputElement) {
      this.savedData = e.target.value;
    }
  }
  componentWillUnmount(): void {
    localStorage.setItem('search', this.savedData);
  }
  render() {
    return (
      <div className="searchBar">
        <input
          className="searchBar__input"
          type="text"
          name="searchBar"
          defaultValue={this.savedData}
          onChange={() => this.inputChange(event)}
        />
      </div>
    );
  }
}
export default SearchBar;
