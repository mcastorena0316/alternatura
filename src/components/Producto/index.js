import React from 'react';
import PropTypes from 'prop-types';

const Producto = ({ image }) => (
  <div className="producto">
    <img src={image} alt="example" />
    <p>por NombreTienda</p>
    <div className="middle">
      <p>+</p>
    </div>
  </div>
);

Producto.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Producto;
