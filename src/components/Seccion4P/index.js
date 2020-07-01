/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ProductoGrande from '../ProductoGrande';
import './Seccion4P.css';

const Seccion4P = ({ arrayimages, nombre }) => (
  <div className="seccion4p promos">
    <ProductoGrande
      nombre={nombre[0]}
      descripcion="Jabon a base de eucalipto"
      precio="Ahora $75 mxn"
      categoria="BELLEZA"
      descuento="-20%"
      imagen={arrayimages[0]}
    />
    <ProductoGrande
      nombre={nombre[1]}
      imagen={arrayimages[1]}
    />
    <ProductoGrande
      nombre={nombre[2]}
      imagen={arrayimages[2]}
    />
    <ProductoGrande
      nombre={nombre[3]}
      imagen={arrayimages[3]}
    />
  </div>
);

Seccion4P.propTypes = {
  arrayimages: PropTypes.array.isRequired,
  nombre: PropTypes.array.isRequired,
};

export default Seccion4P;
