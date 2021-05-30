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
import Tarea from "./Tarea";

function Tareas({ tareas, setTareas }) {
  const _tareas = JSON.parse(tareas);
  const doneClick = () => {
    setTareas(
      JSON.stringify([
        ..._tareas,
        {
          titulo: document.getElementById("titulo").value,
          comentario: "com4",
          mates: 4,
          matesHechos: 0,
        },
      ])
    );
  };

  const doDeleteClick = (_index) => {
    _tareas.splice(_index, 1);
    setTareas(JSON.stringify(_tareas));
  };
  const doDoneClick = (index, tarea) => {
    console.log("done", index, tarea);
    _tareas[index] = tarea;
    setTareas(JSON.stringify(_tareas));
  };
  const listaTareas = _tareas.map((tarea, index) => (
    <Tarea
      tarea={tarea}
      key={index}
      indice={index + 1}
      deleteClick={() => doDeleteClick(index)}
      doneClick={(tarea) => doDoneClick(index, tarea)}
    />
  ));

  return (
    <React.Fragment>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={6} lg={6}>
            {/* TAREA GUARDADA */}
            {/* ACORDEON */}
            <Accordion defaultActiveKey="">
              {listaTareas}
              {/* ACORDEON */}

              {/* AGREGAR TAREA */}

              <Tarea
                tarea={{
                  id: 0,
                  titulo: "Agregar tarea",
                  comentario: "+",
                  mates: 1,
                  matesHechos: 0,
                }}
                key={_tareas.lenght + 1}
                indice={_tareas.lenght + 2}
                deleteClick={() => doDeleteClick(_tareas.lenght)}
                doneClick={(tarea) => doDoneClick(_tareas.lenght, tarea)}
              />

              {/* ESTE ES EL BLOQUE PARA AGREGAR LA TAREA, ES IGUAL AL MISMO SOLO QUE EL CONTENIDO VISIBLE EN VEZ DE MOSTRAR LA TAREA GUARDADA, MUESTRA LA LEYENDA "AGREGAR TAREA" */}
              {/* LOS COMENTARIOS QUE HICE EN EL BLOQUE ANTERIOR VAN EN ESTE BLOQUE DE LA MISMA MANERA */}

              <Card className="card-agregar">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  className="justify-content center"
                >
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
                      id="titulo"
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
                          <img
                            src={done}
                            className="delete-done"
                            onClick={doneClick}
                          />
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            {/* TIEMPO TOTAL */}

            {/* ACA VAN LAS HORAS LINKEADAS DE TRABAJO TOTAL */}
            {/* HAY QUE DEFINIR SI LE PONEMOS MÁS INFORMACIÓN COMO EN POMOFOCUS */}
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
