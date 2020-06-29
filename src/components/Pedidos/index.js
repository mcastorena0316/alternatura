import React from 'react';

const Pedidos = () => (
  <section>
    <h2>Tus pedidos</h2>
    <div className="pedidos">
      {/* Esta info debe de ser bajada de database */}
      <h3>G11-Homeopata Kora</h3>
      <p>Soluciones a base de Homeopatia</p>
      <p>Entregado el dia 11 Mayo de 2020</p>
    </div>
    <div className="puntos">
      <p>Recibe puntos por darnos tu opinion</p>
      <p>Quisieras recomendar a Homeopoata Kora?</p>
    </div>
  </section>
);

export default Pedidos;
