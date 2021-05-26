import React from "react";
import more from "../assets/icons/more.svg";
import matesinrelleno_lila from "../assets/icons/matesinrelleno_lila.png";
import arrow_up from "../assets/icons/arrow_up.svg";
import arrow_down from "../assets/icons/arrow_down.svg";
import done from "../assets/icons/done.svg";
import delete_icon from "../assets/icons/delete.svg";
import {
  Container,
  Row,
  Col,
  Accordion,
  Form,
  Card,
  Button,
} from "react-bootstrap";
import Tarea from "./Tarea";

function Tareas(props) {
  const { tareas, setTarea } = props.props;
  const _tareas = JSON.parse(tareas);
  const doneClick = (event) => {
    console.log(event);
    setTarea(
      JSON.stringify([
        ..._tareas,
        {
          titulo: document.getElementById("titulo").value,
          comentario: "com4",
          mates: 4,
          matesHechos: 2,
        },
      ])
    );
  };
  console.log(_tareas);
  const listaTareas = _tareas.map((tarea, index) => (
    <Tarea tarea={tarea} indice={index + 1} key={index} />
  ));
  return (
    <React.Fragment>
      <Container>
        <Row>
          {/* <input value={tareas} type="text" onChange={onChange} /> */}

          <Col>
            <Accordion defaultActiveKey="0">
              {listaTareas}
              {/* ////// */}
              <Card>
                <Card.Header className="card-tarea d-flex flex-row justify-content-between align-items-center">
                  <div className="d-flex flex-row justify-content-start align-items-center">
                    <img src={matesinrelleno_lila} className="mate-tarea" />
                    <p className="texto-tarea">Agregar tarea</p>
                  </div>

                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <img src={more} className="more" />
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="d-flex flex-column justify-content-start">
                    <Form>
                      <Form.Control
                        size="sm"
                        type="text"
                        className="texto-input"
                        placeholder="Introduzca una tarea"
                        id="titulo"
                      />
                      <p className="texto-tiempo">¿Cuánto tiempo necesitás?</p>
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <div>
                          <img
                            src={matesinrelleno_lila}
                            className="mate-tarea"
                          />
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
                          <Button variant="outline-light" onClick={doneClick}>
                            <img src={done} className="delete-done" />
                          </Button>
                        </div>
                      </div>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* ////// */}
            </Accordion>
            {/* ACA VAN LAS HORAS LINKEADAS DE TRABAJO TOTAL */}
            <Card className="tiempo-total d-flex flex-column justify-content-center align-items-center">
              <Card.Body className="tiempo-total d-flex flex-row justify-content-center">
                <p className="tiempo-total-texto">Tiempo total:</p>
                <a className="tiempo-total-texto" href="tiempo-total">
                  4
                </a>
                <p className="tiempo-total-texto">horas</p>
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
