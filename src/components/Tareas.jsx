import React from "react";
import more from "../assets/icons/more.svg";
import matesinrelleno_lila from "../assets/icons/matesinrelleno_lila.png";
import { Container, Row, Col, Accordion, Form, Card, Button, Nav } from "react-bootstrap";

function Tareas() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header className="d-flex flex-row justify-content-between align-items-center">
                  <div className="d-flex flex-row" >
                  <img src={matesinrelleno_lila} className="mate-tarea" />
                  <p className="texto-tarea">Elaborar informe</p>
                  </div>
                  
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <img src={more} className="more" />
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                  <Form.Control size="sm" type="text" className="texto-input" placeholder="¿Cuál es la próxima tarea?" />
                  <p className="texto-tarea">¿Cuánto tiempo necesitás?</p>
                  <img src={matesinrelleno_lila} className="mate-tarea" />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Tareas;

// className="d-flex flex-column justify-content-center"
