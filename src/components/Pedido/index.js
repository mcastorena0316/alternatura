import React from 'react';
import PropTypes from 'prop-types';

const Pedido = ({ tienda, producto, status }) => (
  <div>
    <div className="pedidos">
      <h3>{tienda}</h3>
      <p>{producto}</p>
      <p>{status}</p>
    </div>
    <div className="puntos">
      <p>Recibe puntos por darnos tu opinion</p>
      <p>
        Quisieras recomendar a
        { tienda}
        ?
      </p>
    </div>
  </div>
);

Pedido.propTypes = {
  tienda: PropTypes.string.isRequired,
  producto: PropTypes.string.isRequired,
  status: PropTypes.string,
};

Pedido.defaultProps = {
  status: 'Pendiente',
};
export default Pedido;
