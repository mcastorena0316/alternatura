import React from 'react';
import Seccion6P from '../Seccion6P';
import Seccion4P from '../Seccion4P';
import './Main.css';

const Main = () => (
  <main id="page-wrap">

    <Seccion6P nombre="Los mas vendidos" arrayimages={['1QD4FW3/example1', 'Y7Xhd4d/example2.jpg', 'wpwLtm7/example3.jpg']} />
    <Seccion4P />
    <Seccion6P nombre="Basado en lo que viste" arrayimages={['1QD4FW3/example1', 'Y7Xhd4d/example2.jpg', 'wpwLtm7/example3.jpg']} />
    <Seccion6P nombre="Conoce a nuestros especialistas" arrayimages={['bWQpkDq/people3.jpg', 'z4TfbCm/people2.jpg', '0hL8Jz2/people1.jpg']} />
    <Seccion4P />
  </main>
);
export default Main;
