import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import Tarea from "./Tarea";
import AddTarea from "./AddTarea";

function Tareas({ tareas, setTareas }) {
  const _tareas = JSON.parse(tareas);

  const doDeleteClick = (_index) => {
    _tareas.splice(_index, 1);
    setTareas(JSON.stringify(_tareas));
  };

  const doDoneClick = (index, tarea) => {
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
            <Accordion>
              {listaTareas}
              {/* AGREGAR TAREA */}
              <AddTarea
                key={_tareas.length + 1}
                doneClick={(tarea) => doDoneClick(_tareas.length, tarea)}
              />
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
