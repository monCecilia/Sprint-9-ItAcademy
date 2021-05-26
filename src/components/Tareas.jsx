import React from "react";
import more from "../assets/icons/more.svg";
import matesinrelleno_lila from "../assets/icons/matesinrelleno_lila.png";
import arrow_up from "../assets/icons/arrow_up.svg";
import arrow_down from "../assets/icons/arrow_down.svg";
import done from "../assets/icons/done.svg";
import delete_icon from "../assets/icons/delete.svg";
import add from "../assets/icons/add.svg";
import {
  Container,
  Row,
  Col,
  Accordion,
  Form,
  Card,
  Button,
} from "react-bootstrap";

function Tareas() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>


          {/* TAREA GUARDADA */}
            {/* ACORDEON */}

            <Accordion defaultActiveKey="0">
              <Card className="card-tarea">
                <Card.Header className="card-tarea d-flex flex-row justify-content-between align-items-center">
                  <div className="d-flex flex-row justify-content-start align-items-center">
                    {/* ACA PODRIA CAMBIAR EL MATE DE LILA A VERDE CUANDO ESTÁ COMPLETA LA TAREA Y TACHAR TEXTO */}
                    <img src={matesinrelleno_lila} className="mate-tarea" />
                    <p className="texto-tarea">Elaborar informe</p>
                  </div>

                  <div>
                    <a className="cuenta-mates" href="">
                      1/4
                    </a>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <img src={more} className="more" />
                    </Accordion.Toggle>
                  </div>
                </Card.Header>

                {/* ACA COMIENZA EL CONTENIDO QUE SE ESCONDE */}
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="d-flex flex-column justify-content-start">
                    <Form.Control
                      size="sm"
                      type="text"
                      className="texto-input"
                      placeholder="Introduzca una tarea"
                    />
                    <p className="texto-tiempo">¿Cuánto tiempo necesitás?</p>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <div>
                        <img src={matesinrelleno_lila} className="mate-tarea" />
                      </div>
                      <div>
                        <Button className="arrow" variant="outline-light">
                          <img src={arrow_up} className="arrow" />
                        </Button>
                        <Button className="arrow" variant="outline-light">
                          <img src={arrow_down} className="arrow" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Form.Control
                        size="sm"
                        type="text"
                        className="texto-comentarios"
                        placeholder="Comentarios"
                      />
                      <div className="d-flex flex-row justify-content-end align-items-center">
                        <Button variant="outline-light">
                          <img src={delete_icon} className="delete-done" />
                        </Button>
                        <Button variant="outline-light">
                          <img src={done} className="delete-done" />
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            {/* ACORDEON */}

            {/* AGREGAR TAREA */}

            <Accordion defaultActiveKey="0">
              <Card className="card-agregar">
                <Accordion.Toggle as={Card.Header} eventKey="0" className="justify-content center">
                  Agregar tarea
                  <img src={add} className="add" />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="d-flex flex-column justify-content-start">
                    <Form.Control
                      size="sm"
                      type="text"
                      className="texto-input"
                      placeholder="Introduzca una tarea"
                    />
                    <p className="texto-tiempo">¿Cuánto tiempo necesitás?</p>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <div>
                        <img src={matesinrelleno_lila} className="mate-tarea" />
                      </div>
                      <div>
                        <Button className="arrow" variant="outline-light">
                          <img src={arrow_up} className="arrow" />
                        </Button>
                        <Button className="arrow" variant="outline-light">
                          <img src={arrow_down} className="arrow" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Form.Control
                        size="sm"
                        type="text"
                        className="texto-comentarios"
                        placeholder="Comentarios"
                      />
                      <div className="d-flex flex-row justify-content-end align-items-center">
                        <Button variant="outline-light">
                          <img src={delete_icon} className="delete-done" />
                        </Button>
                        <Button variant="outline-light">
                          <img src={done} className="delete-done" />
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            {/* TIEMPO TOTAL */}

            {/* ACA VAN LAS HORAS LINKEADAS DE TRABAJO TOTAL */}
            <Card className="tiempo-total d-flex flex-column justify-content-center align-items-center">
              <Card.Body className="tiempo-total-texto d-flex flex-row justify-content-center align-items-center">
                  Tiempo total:
                <a className="tiempo-total-texto" href="tiempo-total">
                  4
                </a>
                horas
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Tareas;

// className="d-flex flex-column justify-content-center"
