import React, { Fragment } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Button } from "../theme/Styled";
import persona1 from "../assets/persona1.png";
import persona2 from "../assets/persona2.png";
import persona3 from "../assets/persona3.png";
function Intro() {
  return (
    <Fragment>
      <Container
        fluid
        className="altura-max d-flex flex-column justify-content-center"
      >
        <Row>
          <Col>
            <Image style={{ maxWidth: "80%" }} src={persona1} rounded />
          </Col>
          <Col>
            <p className="titulo-intro">ARMÁ TU LISTA</p>
            <p className="texto-intro">
              de tareas y asignales cuántos bloques calculás que te va a llevar hacerla
            </p>
          </Col>
        </Row>
        <Row >
          <Col>
            <p className="titulo-intro">CUANDO TOCA, TOCA</p>
            <p className="texto-intro">
              concentrarse, sin distracciones y en la pausa te relajás, escuchas
              música, hacés algo de la casa y por supuesto sale matecito!
            </p>
          </Col>
          <Col>
            <Image style={{ maxWidth: "80%" }} src={persona2} rounded />
          </Col>
        </Row>
        <Row >
        <Col>
            <Image style={{ maxWidth: "80%" }} src={persona3} rounded />
          </Col>
          <Col>
            <p className="titulo-intro">MÁS TIEMPO LIBRE</p>
            <p className="texto-intro">
              para hacer lo que te gusta, organizando tu jornada tenés más
              tiempo para disfrutar
            </p>
          </Col>
          
        </Row>
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-end m-4">
            <Button>Siguiente</Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Intro;
