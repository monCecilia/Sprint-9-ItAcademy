import React from "react";
import play from "../assets/icons/play.svg";
import { Container, Row, Col } from "react-bootstrap";

function Reloj() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center">
            {/* RELOJ */}
            <h1 className="display-3 reloj">25:00</h1>
            {/* ICONO PLAY */}
            <img src={play} className="play" />

            <p className="texto-light">TRABAJANDO EN</p>
            <a className="texto-light" href="#currentTask">
              Elaborar informe
            </a>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Reloj;
