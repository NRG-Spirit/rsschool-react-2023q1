import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  savedData: string;
  data: string;
  constructor(props: Readonly<object>) {
    super(props);
    this.savedData = localStorage.getItem('search') || '';
    this.data = '';
  }
  componentDidMount(): void {
    this.savedData = localStorage.getItem('search') || '';
  }
  inputChange(e: Event | undefined): void {
    if (e?.target instanceof HTMLInputElement) {
      this.data = e.target.value;
    }
  }
  componentWillUnmount(): void {
    localStorage.setItem('search', this.data);
  }
  render() {
    return (
      <div className="searchBar">
        <input
          className="searchBar__input"
          type="text"
          name=""
          id=""
          defaultValue={this.savedData}
          onChange={() => this.inputChange(event)}
        />
      </div>
    );
  }
}
export default SearchBar;
