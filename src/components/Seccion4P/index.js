import React from 'react';
import ProductoGrande from '../ProductoGrande';
import './Seccion4P.css';
// import PropTypes from 'prop-types';

const Seccion4P = () => (
  <div className="seccion4p promos">
    <ProductoGrande
      nombre="Oferta del dia"
      descripcion="Jabon a base de eucalipto"
      precio="Ahora $75 mxn"
      categoria="BELLEZA"
      descuento="-20%"
    />
    <ProductoGrande />
    <ProductoGrande />
    <ProductoGrande />
  </div>
);

export default Seccion4P;
