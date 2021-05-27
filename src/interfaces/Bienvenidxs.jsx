import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Button } from "../theme/Styled";
import logoMate from "../assets/logo_mate.png";
function Bienvenidxs() {
  return (
    <Container style={{ marginTop: "10vh" }}>
      <Row>
        <Col>
          <Card className="card-group-intro flex-row">
            <Card.Img
              src={logoMate}
              className="card-group-intro"
              style={{ width: "400px" }}
            
            />
            <Card.Body className="card-group-intro">
              <Card.Title className="titulo">mateFocus</Card.Title>
              <Card.Text className="texto">
                Está basado en el método Pomodoro para gestionar el tiempo de
                trabajo o estudio
              </Card.Text>
              <Card.Text className="texto">
                Bloques de actividad de 25 minutos, seguidos de 5 de descanso.
                Cada 4 bloques de trabajo, toca una pausa larga de 20 minutos
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Bienvenidxs;


