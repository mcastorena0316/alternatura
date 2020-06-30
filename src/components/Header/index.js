import React from 'react';
import { Link } from 'react-router-dom';
import title from './Alternatura.png';
import './Header.css';

const Header = () => (
  <header>
    <div className="logo">
      <Link to="/"><img src={title} alt="alternatura" /></Link>
    </div>
    <div className="icons">
      <i className="fa fa-search" aria-hidden="true" />
      <i className="fa fa-bell" aria-hidden="true" />
      <i className="fa fa-comment" aria-hidden="true" />
      <i className="fa fa-shopping-cart" aria-hidden="true" />
    </div>
  </header>
);

export default Header;
