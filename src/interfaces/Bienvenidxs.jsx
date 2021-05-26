import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../theme/Styled";
function Bienvenidxs() {
  return (
    <React.Fragment>
      <Container className="background">
        <Row className="altura-max d-flex flex-column justify-content-center align-items-center align-content-center">
         
          <Col>
            <h2 className="titulo-bienvenidxs">mateFocus</h2>
            <p className="texto-bienvenidxs">
              Está basado en el método Pomodoro para gestionar el tiempo de
              trabajo o estudio
            </p>
          </Col>
          <Col>
            <h4 className="subtitulo">¿De qué se trata?</h4>
            <p className="texto-bienvenidxs">
              Bloques de actividad de 25 minutos, seguidos de 5 de descanso.
              Cada 4 bloques de trabajo, toca una pausa larga de 20 minutos
            </p>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-end m-4">
            <Button>Siguiente</Button>
          </Col>
          
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Bienvenidxs;
