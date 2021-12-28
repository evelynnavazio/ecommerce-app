import React from "react";
import { Container, Row } from 'react-bootstrap';
import  './Footer.css'

function Footer() {
  return (
    <Container  className="footer-container d-flex flex-row justify-content-around align-items-center text-center">
    <Row>
    <ul className="d-flex flex-row justify-content-around">
        <li>Trabajá con nosotros</li>
        <li>Cómo cuidamos tu privacidad</li>
        <li>Información al usuario</li>
        <li>AyudaDefensa del Consumidor</li>
        <li>Términos y condiciones</li>
      </ul>
      <ul>
        <li>Copyright © 1999-2021 MercadoLibre S.R.L.</li>
        <li>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</li>
      </ul>
    </Row>
    </Container>
  );
}

export default Footer;
