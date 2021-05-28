import React, { Fragment } from "react";
import { Container, Row, Col, Image, Card, CardGroup } from "react-bootstrap";
import { Button } from "../theme/Styled";
import persona1 from "../assets/persona1.png";
import persona2 from "../assets/persona2.png";
import persona3 from "../assets/persona3.png";
function Intro() {
  return (
    <Container style={{ marginTop: "10vh" }}>
      <Row>
        <Col>
          <CardGroup>
            <Card className="card-group-intro m-1">
              <Card.Img
                variant="top"
                src={persona1}
                className="card-group-intro"
              />
              <Card.Body className="card-group-intro d-flex flex-column justify-content-around">
                <h3 className="titulo">ARMÁ TU LISTA</h3>
                <h5 className="texto card-bloque-texto">
                  de tareas y asignales cuántos bloques calculás que te va a
                  llevar hacerla
                </h5>
              </Card.Body>
            </Card>
            <Card className="card-group-intro m-1">
              <Card.Img
                variant="top"
                src={persona2}
                className="card-group-intro"
              />
              <Card.Body className="card-group-intro d-flex flex-column justify-content-around">
                <h3 className="titulo">CUANDO TOCA, TOCA</h3>
                <h5 className="texto">
                  concentrarse, sin distracciones y en la pausa te relajás y por
                  supuesto sale matecito!
                </h5>
              </Card.Body>
            </Card>
            <Card className="card-group-intro m-1">
              <Card.Img
                variant="top"
                src={persona3}
                className="card-group-intro"
              />
              <Card.Body className="card-group-intro d-flex flex-column justify-content-around">
                <h3 className="titulo">MÁS TIEMPO LIBRE</h3>
                <h5 className="texto">
                  para hacer lo que te gusta, organizando tu jornada tenés más
                  tiempo para disfrutar
                </h5>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;

<Fragment>
  <Container>
    <Row className="d-flex align-items-center">
      <Col xs={6} md={6} lg={6}>
        <Image src={persona1} />
      </Col>
      <Col xs={4} md={4} lg={4}>
        <h4 className="titulo-intro">ARMÁ TU LISTA</h4>
        <p className="texto-intro">
          de tareas y asignales cuántos bloques calculás que te va a llevar
          hacerla
        </p>
      </Col>
    </Row>
    <Row className="d-flex align-items-center">
      <Col xs={6} md={6} lg={6}>
        <h4 className="titulo-intro">CUANDO TOCA, TOCA</h4>
        <p className="texto-intro">
          concentrarse, sin distracciones y en la pausa te relajás, escuchas
          música, hacés algo de la casa y por supuesto sale matecito!
        </p>
      </Col>
      <Col xs={6} md={6} lg={6}>
        <Image src={persona2} />
      </Col>
    </Row>
    <Row className="d-flex align-items-center">
      <Col xs={6} md={6} lg={6}>
        <Image src={persona3} />
      </Col>
      <Col xs={6} md={6} lg={6}>
        <h4 className="titulo-intro">MÁS TIEMPO LIBRE</h4>
        <p className="texto-intro">
          para hacer lo que te gusta, organizando tu jornada tenés más tiempo
          para disfrutar
        </p>
      </Col>
    </Row>
    {/* <Row>
          <Col className="d-flex flex-column justify-content-center align-items-end">
            <Button>Siguiente</Button>
          </Col>
        </Row> */}
  </Container>
</Fragment>;
