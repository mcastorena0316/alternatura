import React from 'react';
import Promo from '../Promo';
import './Main.css';

const Main = () => (
  <main id="page-wrap">
    <div className="promos">
      <Promo
        nombre="Oferta del dia"
        descripcion="Jabon a base de eucalipto"
        precio="Ahora $75 mxn"
        categoria="BELLEZA"
        descuento="-20%"
      />
      <Promo />
      <Promo />
      <Promo />
    </div>
  </main>
);
export default Main;
