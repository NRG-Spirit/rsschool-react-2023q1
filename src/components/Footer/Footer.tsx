import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <a className="footer__rs-link" href="https://rs.school/"></a>
        <span className="footer__year">2023</span>
        <a className="footer__author" href="https://github.com/NRG-Spirit"></a>
      </div>
    );
  }
}
export default Footer;
