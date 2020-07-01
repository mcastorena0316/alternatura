import React from 'react';
import Promo from '../Promo';
import Producto from '../Producto';
import example from './example1.jpg';
import example2 from './example2.jpg';
import example3 from './example3.jpg';

import './Main.css';

const Main = () => (
  <main id="page-wrap">
    <div className="mas-vendidos">
      <h4>Los mas vendidos</h4>
      <div className="productos">
        <Producto image={example} />
        <Producto image={example2} />
        <Producto image={example3} />
        <Producto image={example} />
        <Producto image={example2} />
        <Producto image={example3} />
      </div>
    </div>
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
