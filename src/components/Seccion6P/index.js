import React from 'react';
import PropTypes from 'prop-types';
import ProductoChico from '../ProductoChico';
import './Seccion6P.css';

const Seccion6P = ({ nombre, arrayimages }) => (
  <div className="seccion6p mas-vendidos">
    <h4>{nombre}</h4>
    <div className="productos">
      <ProductoChico image={`https://i.ibb.co/${arrayimages[0]}.jpg`} />
      <ProductoChico image={`https://i.ibb.co/${arrayimages[1]}.jpg`} />
      <ProductoChico image={`https://i.ibb.co/${arrayimages[2]}.jpg`} />
      <ProductoChico image={`https://i.ibb.co/${arrayimages[0]}.jpg`} />
      <ProductoChico image={`https://i.ibb.co/${arrayimages[1]}.jpg`} />
      <ProductoChico image={`https://i.ibb.co/${arrayimages[2]}.jpg`} />
    </div>
  </div>
);

Seccion6P.propTypes = {
  nombre: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  arrayimages: PropTypes.array.isRequired,
};

export default Seccion6P;
