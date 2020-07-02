import React from 'react';
import { Link } from 'react-router-dom';
import title from './Alternatura.png';
import './Header.css';

const Header = () => (
  <header>
    <div className="logo">
      <Link to="/"><img src={title} alt="alternatura" /></Link>
    </div>

    <div className="search">
      <input type="text" placeholder="Search" className="search-bar" />
      <button type="button" className="searchButton">
        <i className="fa fa-search" />
      </button>
    </div>
    <div className="icons">
      <i className="fa fa-bell" aria-hidden="true" />
      <i className="fa fa-comment" aria-hidden="true" />
      <i className="fa fa-shopping-cart" aria-hidden="true" />
    </div>
  </header>
);

export default Header;
