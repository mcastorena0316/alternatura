import React from 'react';
import PropTypes from 'prop-types';

const ProductoChico = ({ image }) => (
  <div className="producto">
    <img src={image} alt="example" />
    <p>por NombreTienda</p>
    <div className="middle">
      <p>+</p>
    </div>
  </div>
);

ProductoChico.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ProductoChico;
