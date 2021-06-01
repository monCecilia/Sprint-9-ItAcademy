import React, { useEffect, useState } from "react";
import play from "../assets/icons/play.svg";
import pause from "../assets/icons/pause.svg";
import { Container, Row, Col, Button } from "react-bootstrap";

function Reloj(props) {
  const [matesSesion, setMatesSesion] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(25 * 60);
  const [time, setTime] = useState({
    second: "00",
    minute: "25",
  });

  var timer = [
    { tipo: "mate", tiempo: 25 },
    { tipo: "descCorto", tiempo: 5 },
    { tipo: "descLargo", tiempo: 20 },
  ];

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);
        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;
        setTime({ second: computedSecond, minute: computedMinute });
        counter > 0 && setCounter((counter) => counter - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive, counter]);
  function stopTimer() {
    setIsActive(false);
    setCounter(25 * 60);
    setTime({ second: "00", minute: "25" });
  }
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={12} md={6} lg={6}>
          {/* RELOJ PROGRAMAR CRONOMETRO */}
          {/* CUANDO SE CUMPLEN LOS 25 MINUTOS DEBE APARECER LA PANTALLA SHORT O LONG BREAK (ESOS CRONOMETROS SE ACTIVAN CON PLAY Y CUANDO TERMINAN SUENA DE NUEVO Y SE APRETA EL PAUSA O STOP Y VUELVE AL HOME) */}
          <div>
            <h1 className="reloj display-2">
              {time.minute}:{time.second}
            </h1>
          </div>
          {/* ICONO PLAY */}
          <Button
            className="arrow"
            variant="outline-light"
            onClick={() => setIsActive(!isActive)}
            className="start"
          >
            {isActive ? (
              <img src={pause} className="play" />
            ) : (
              <img src={play} className="play" />
            )}
          </Button>
          <button onClick={stopTimer} className="reset">
            Reset
          </button>
          {/* TRABAJANDO EN */}
          <div className="p-1">
            {props.tareaActiva && <p className="texto-light ">TRABAJANDO EN</p>}
            {/* ENLACE CON LA CURRENT TASK */}
            <a className="texto-light" href="#currentTask">
              {props.tareaActiva && props.tareaActiva.titulo}
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Reloj;
