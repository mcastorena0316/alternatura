import React from 'react';
import PropTypes from 'prop-types';
import promo from './promo1.jpg';

const Promo = ({
  nombre, descripcion, precio, categoria, descuento,
}) => (
  <div className="una-promo">
    <h3>{nombre}</h3>
    <img src={promo} alt="promo" />
    <p className="descripcion">{descripcion}</p>
    <p className="precio">
      {precio}
      {' '}
      <span>
        {descuento}
      </span>
      {' '}
    </p>
    <div className="cat-des">
      <p>{categoria}</p>
      <p>Ver mas ofertas</p>
    </div>

  </div>
);

Promo.propTypes = {
  nombre: PropTypes.string,
  descripcion: PropTypes.string,
  precio: PropTypes.string,
  categoria: PropTypes.string,
  descuento: PropTypes.string,
};

Promo.defaultProps = {
  nombre: 'Lorem Impsum',
  descripcion: 'lorem ipsum dolor sit',
  precio: 'Ahora $70',
  categoria: 'OTROS',
  descuento: '-0%',
};
export default Promo;
