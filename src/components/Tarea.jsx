import React, { useEffect, useState } from "react";
import more from "../assets/icons/more.svg";
import matesinrelleno_lila from "../assets/icons/matesinrelleno_lila.png";
import matesinrelleno_verde from "../assets/icons/matesinrelleno_verde.png";
import arrow_up from "../assets/icons/arrow_up.svg";
import arrow_down from "../assets/icons/arrow_down.svg";
import done from "../assets/icons/done.svg";
import delete_icon from "../assets/icons/delete.svg";
import { Accordion, Form, Card, Button } from "react-bootstrap";

function Tarea(props) {
  const [tarea, setTarea] = useState(props.tarea);

  useEffect(() => {
    setTarea(props.tarea);
  }, [props.tarea]);

  return (
    <Card className="card-tarea">
      <Card.Header
        className="card-tarea d-flex flex-row justify-content-between align-items-center"
        onClick={() => props.setActiva()}
      >
        {/* div para que los comentarios queden por debajo */}
        <div className="d-flex flex-column justify-content-start align-items-center">
          <div className="d-flex flex-row justify-content-start align-items-center">
            {/* ACA PODRIA CAMBIAR EL MATE DE LILA A VERDE CUANDO ESTÁ COMPLETA LA TAREA Y TACHAR TEXTO */}

            {tarea.mates - tarea.matesHechos === 0 ? (
              <>
                <img src={matesinrelleno_verde} className="mate-tarea" />
                <p
                  className="texto-tarea"
                  style={{ textDecoration: "line-through" }} //Meter en css
                >
                  {tarea.titulo}
                </p>
              </>
            ) : (
              <>
                <img src={matesinrelleno_lila} className="mate-tarea" />
                <p className="texto-tarea">{tarea.titulo}</p>
              </>
            )}
          </div>
          <div className="texto-comentario">{tarea.comentario}</div>
        </div>

        <div>
          {/* ACA HAY QUE PROGRAMAR PARA QUE APAREZCA CUANTOS "MATES" O BLOQUES LE ASIGNA A CADA TAREA Y CUANTAS LLEVA HECHAS */}
          <a className="cuenta-mates" href="">
            {tarea.matesHechos}/{tarea.mates}
          </a>
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey={props.tarea.id}
          >
            <img src={more} className="more" />
          </Accordion.Toggle>
        </div>
      </Card.Header>

      {/* ACA COMIENZA EL CONTENIDO QUE SE ESCONDE */}
      <Accordion.Collapse eventKey={props.tarea.id}>
        <Card.Body className="d-flex flex-column justify-content-start">
          {/* ACA INTRODUCE LA TAREA */}
          <Form.Control
            size="sm"
            type="text"
            className="texto-input"
            value={tarea.titulo}
            onChange={(e) => setTarea({ ...tarea, titulo: e.target.value })}
          />
          {/* ACA LE ASIGNA CUANTOS BLOQUES, TIENEN QUE APARECER POR PANTALLA TANTOS MATES COMO BLOQUES DE TIEMPO NECESITA, VAN A APARECER SI SUBE O BAJA CON LOS BOTONES ARROW */}
          <p className="texto-tiempo">¿Cuánto tiempo necesitás?</p>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div>
              {[...Array(tarea.matesHechos)].map((x, i) => (
                <img
                  src={matesinrelleno_verde}
                  className="mate-tarea"
                  key={i}
                />
              ))}
              {[...Array(tarea.mates - tarea.matesHechos)].map((x, i) => (
                <img src={matesinrelleno_lila} className="mate-tarea" key={i} />
              ))}
            </div>
            {/* BOTONES ARROW DE INCREMENTO O DECREMENTO */}
            <div>
              <Button className="arrow" variant="outline-light">
                <img
                  src={arrow_up}
                  className="arrow"
                  onClick={() =>
                    tarea.mates < 10 //Máximo de mates
                      ? setTarea({ ...tarea, mates: tarea.mates + 1 })
                      : null
                  }
                />
              </Button>
              <Button className="arrow" variant="outline-light">
                <img
                  src={arrow_down}
                  className="arrow"
                  onClick={() =>
                    tarea.mates > tarea.matesHechos && tarea.mates > 1
                      ? setTarea({ ...tarea, mates: tarea.mates - 1 })
                      : null
                  }
                />
              </Button>
            </div>
          </div>
          <div>
            {/* ACA VAN LOS COMENTARIOS, HAY QUE PONER ALGUNA FUNCIONALIDAD PARA QUE SI EXISTEN APAREZCAN POR FUERA DEL CONTENIDO QUE SE ENCONDE */}
            <Form.Control
              size="sm"
              type="text"
              className="texto-comentarios"
              placeholder="Comentarios"
              value={tarea.comentario}
              onChange={(e) =>
                setTarea({ ...tarea, comentario: e.target.value })
              }
            />
            <div className="d-flex flex-row justify-content-end align-items-center">
              {/* BOTONES DELETE Y DONE PARA GUARDAR O ELIMINAR LA TAREA */}
              <Button
                variant="outline-light"
                onClick={() => props.deleteClick()}
              >
                <img src={delete_icon} className="delete-done" />
              </Button>
              <Button
                variant="outline-light"
                onClick={() => props.doneClick(tarea)}
              >
                <img src={done} className="delete-done" />
              </Button>
            </div>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default Tarea;
