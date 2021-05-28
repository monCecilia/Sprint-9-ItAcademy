import React from "react";
import play from "../assets/icons/play.svg";
import { Container, Row, Col, Button } from "react-bootstrap";

function Reloj() {
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={12} md={6} lg={6}>
          {/* RELOJ PROGRAMAR CRONOMETRO */}
          {/* CUANDO SE CUMPLEN LOS 25 MINUTOS DEBE APARECER LA PANTALLA SHORT O LONG BREAK (ESOS CRONOMETROS SE ACTIVAN CON PLAY Y CUANDO TERMINAN SUENA DE NUEVO Y SE APRETA EL PAUSA O STOP Y VUELVE AL HOME) */}
          <div>
            <h1 className="reloj display-2">25:00</h1>
          </div>

          {/* ICONO PLAY */}
          <Button className="arrow" variant="outline-light">
            <img src={play} className="play" />
          </Button>

          {/* TRABAJANDO EN */}
          <div className="p-1">
            <p className="texto-light ">TRABAJANDO EN</p>
            {/* ENLACE CON LA CURRENT TASK */}
            <a className="texto-light" href="#currentTask">
              Elaborar informe
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Reloj;
