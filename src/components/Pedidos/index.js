import React from 'react';
import Pedido from '../Pedido';

const Pedidos = () => (
  <section id="page-wrap">
    <h2>Tus pedidos</h2>
    <Pedido
      tienda="G11-Homeopata Kora"
      producto="aceites esenciales"
      status="Entregado el dia 11 Mayo de 2020"
    />
  </section>
);

export default Pedidos;
