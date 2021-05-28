import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Button } from "../theme/Styled";
import logoMate from "../assets/logo_mate.png";
function Bienvenidxs() {
  return (
    <Container style={{ marginTop: "10vh" }}>
      <Row>
        <Col>
          <Card className="card-group-intro flex-md-row justify-content-around">
            <div>
            <Card.Img
              src={logoMate}
              className="logoMate-card-group-intro"
              
            
            />
            <h1 className="titulo">mateFocus</h1>
            </div>
            
          
            <Card.Body className="card-group-intro d-flex flex-column justify-content-around" style={{maxWidth:'600px'}}>
            <Card.Body className="card-bloque-texto mt-2 d-flex align-items-center" >
            <h5 className="texto text-md-left">
                Está basado en el método Pomodoro para gestionar el tiempo de
                trabajo o estudio.
              </h5>
            </Card.Body>
              
             <Card.Body className="card-bloque-texto mt-2 d-flex align-items-center">
             <h5 className="texto text-md-left card-bloque-texto">
                Bloques de actividad de 25 minutos, seguidos de 5 de descanso.
              </h5>
             </Card.Body>
             <Card.Body className="card-bloque-texto mt-2 d-flex align-items-center">
             <h5 className="texto text-md-left card-bloque-texto">
                Cada 4 bloques de trabajo, toca una pausa larga de 20 minutos.
              </h5>
             </Card.Body>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Bienvenidxs;


