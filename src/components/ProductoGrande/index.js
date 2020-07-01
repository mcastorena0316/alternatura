import React from 'react';
import PropTypes from 'prop-types';

const ProductoGrande = ({
  nombre, descripcion, precio, categoria, descuento, imagen
}) => (
  <div className="una-promo">
    <h3>{nombre}</h3>
    <img src={`https://i.ibb.co/${imagen}`} alt="promo" />
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

ProductoGrande.propTypes = {
  nombre: PropTypes.string,
  descripcion: PropTypes.string,
  precio: PropTypes.string,
  categoria: PropTypes.string,
  descuento: PropTypes.string,
  imagen: PropTypes.string.isRequired,
};

ProductoGrande.defaultProps = {
  nombre: 'Lorem Impsum',
  descripcion: 'lorem ipsum dolor sit',
  precio: 'Ahora $70',
  categoria: 'OTROS',
  descuento: '-0%',
};
export default ProductoGrande;
