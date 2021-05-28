import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../assets/logo_mate.png";
import play from "../assets/icons/play.svg";
function Portada() {
  return (
    <Container
      fluid
      className="background h-100 d-flex flex-column justify-content-center align-items-center align-content-center"
    >
      <Row className="altura-max d-flex flex-column justify-content-center align-items-center">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <img src={logo} className="logo-break" />
          {/* ACA VA CRONOMETRO CON 20 MINUTOS, SE ACTIVA CON EL PLAY Y CUANDO TERMINA SUENA CHICHARRA DE NUEVO Y HAY QUE APRETAR EL PLAY/PAUSA PARA VOLVER AL HOME */}
          <h1 className="texto-break display-2">20:00</h1>
          <Button className="arrow" variant="outline-light">
            <img src={play} className="play" />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Portada;
