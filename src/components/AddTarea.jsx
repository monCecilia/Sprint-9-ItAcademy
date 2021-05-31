import React, { useEffect, useState } from "react";
import more from "../assets/icons/more.svg";
import matesinrelleno_lila from "../assets/icons/matesinrelleno_lila.png";

import arrow_up from "../assets/icons/arrow_up.svg";
import arrow_down from "../assets/icons/arrow_down.svg";
import done from "../assets/icons/done.svg";
import { Accordion, Form, Card, Button } from "react-bootstrap";
import add from "../assets/icons/add.svg";

function Tarea(props) {
  const [tarea, setTarea] = useState({
    id: Math.random(),
    titulo: "",
    mates: 1,
    matesHechos: 0,
  });

  return (
    <>
      <Card className="card-agregar">
        <Accordion.Toggle
          as={Card.Header}
          eventKey={tarea.id + 1}
          className="justify-content center"
        >
          Agregar tarea
          <img src={add} className="add" />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={tarea.id + 1}>
          <Card.Body className="d-flex flex-column justify-content-start">
            <Form.Control
              size="sm"
              type="text"
              className="texto-input"
              placeholder="Introduzca una tarea"
              id="titulo"
              required
              onChange={(e) => setTarea({ ...tarea, titulo: e.target.value })}
            />
            <p className="texto-tiempo">¿Cuánto tiempo necesitás?</p>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <div>
                {[...Array(tarea.mates)].map((x, i) => (
                  <img
                    src={matesinrelleno_lila}
                    className="mate-tarea"
                    key={i}
                  />
                ))}
              </div>
              <div>
                <Button
                  className="arrow"
                  variant="outline-light"
                  onClick={() =>
                    tarea.mates < 10 //Máximo de mates
                      ? setTarea({ ...tarea, mates: tarea.mates + 1 })
                      : null
                  }
                >
                  <img src={arrow_up} className="arrow" />
                </Button>
                <Button
                  className="arrow"
                  variant="outline-light"
                  onClick={() =>
                    tarea.mates - tarea.matesHechos > 1
                      ? setTarea({ ...tarea, mates: tarea.mates - 1 })
                      : null
                  }
                >
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
                onChange={(e) =>
                  setTarea({ ...tarea, comentario: e.target.value })
                }
              />
              <div className="d-flex flex-row justify-content-end align-items-center">
                <Button
                  variant="outline-light"
                  onClick={() => props.doneClick(tarea)}
                  eventkey={tarea.id + 1}
                >
                  <img src={done} className="delete-done" />
                </Button>
              </div>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
}

export default Tarea;
