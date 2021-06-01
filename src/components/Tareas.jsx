import React, { useState } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import Tarea from "./Tarea";
import AddTarea from "./AddTarea";
import Reloj from "../components/Reloj";

function Tareas({ tareas, setTareas }) {
  const [tareaActiva, setTareaactiva] = useState(0);

  const _tareas = JSON.parse(tareas);

  const doDeleteClick = (_index) => {
    _tareas.splice(_index, 1);
    setTareas(JSON.stringify(_tareas));
  };

  const doDoneClick = (index, tarea) => {
    _tareas[index] = tarea;
    setTareas(JSON.stringify(_tareas));
  };

  const doAddMateHecho = () => {
    if (_tareas[tareaActiva].matesHechos < _tareas[tareaActiva].mates) {
      _tareas[tareaActiva].matesHechos++;
      setTareas(JSON.stringify(_tareas));
    }
  };

  const listaTareas = _tareas.map((tarea, index) => (
    <Tarea
      tarea={tarea}
      key={index}
      indice={index + 1}
      deleteClick={() => doDeleteClick(index)}
      doneClick={(tarea) => doDoneClick(index, tarea)}
      setActiva={() => setTareaactiva(index)}
    />
  ));

  return (
    <React.Fragment>
      <Reloj
        tareaActiva={_tareas[tareaActiva]}
        addMateHecho={() => doAddMateHecho()}
      />
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
