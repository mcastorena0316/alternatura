import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

const SideBar = () => (
  <Menu>
    <a className="menu-item" href="/laravel">
      Categorias
    </a>

    <a className="menu-item" href="/angular">
      Recomendaciones por asunto
    </a>

    <Link to="/pedidos" className="menu-item">
      Tus pedidos
    </Link>

    <a className="menu-item" href="/vue">
      Tu Cuenta
    </a>

    <a className="menu-item" href="/node">
      Consulta un especialista
    </a>
  </Menu>
);

export default SideBar;
