import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav>
    <p>Menu</p>
    <ul>
      <li>Categorias</li>
      <li>Recomendaciones por asunto</li>
      <li>Foros</li>
      <Link to="/pedidos">
        <li>Tus pedidos</li>
      </Link>
      <li>Tu cuenta</li>
      <li>Tu perfil</li>
      <li>Consultar un especialista</li>
    </ul>
  </nav>
);

export default Menu;
