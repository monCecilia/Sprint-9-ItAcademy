import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import play from "../assets/icons/play.svg";
import pause from "../assets/icons/pause.svg";

const Reloj = (props) => {
  const [matesSesion, setMatesSesion] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [tiempo, setTiempo] = useState(2);
  const [label, setLabel] = useState("");
  const addMate = props.addMateHecho;

  useEffect(() => {
    console.log(matesSesion);
    if (matesSesion % 2 !== 0 && matesSesion % 7 !== 0) {
      console.log("MATEEE");
      addMate();
      setTiempo(5); //cambiar luego a 5*60
      setLabel("Descanso Corto");
    } else if (matesSesion % 7 === 0 && matesSesion > 0) {
      addMate();
      setTiempo(10); //cammbiar luego a 20*60
      setLabel("Descanso Largo");
    } else {
      setTiempo(2); //cambiar luego a 25*60
      setLabel("Mate");
    }
  }, [matesSesion]);

  const terminaReloj = () => {
    setMatesSesion(matesSesion + 1);
    setIsActive(0);
  };

  const renderReloj = (remainingTime) => {
    const minuteCounter = Math.floor(remainingTime / 60);
    const secondCounter = remainingTime % 60;

    const computedSecond =
      String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
    const computedMinute =
      String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

    return (
      <div className="d-flex flex-column">
        {/* ENLACE CON LA CURRENT TASK */}
        <div className="texto-light">{label}</div>

        <div className="display-3">
          {computedMinute}:{computedSecond}
        </div>
        <div>
          {/* ICONO PLAY */}
          <Button
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
        </div>
      </div>
    );
  };

  return (
    <Container fluid>
      <Row className="d-flex flex-column justify-content-center align-items-center">
        <Col xs={12} md={6} lg={6}>
          {/* RELOJ PROGRAMAR CRONOMETRO */}
          {/* CUANDO SE CUMPLEN LOS 25 MINUTOS DEBE APARECER LA PANTALLA SHORT O LONG BREAK (ESOS CRONOMETROS SE ACTIVAN CON PLAY Y CUANDO TERMINAN SUENA DE NUEVO Y SE APRETA EL PAUSA O STOP Y VUELVE AL HOME) */}
          <div className="reloj  p-1 d-flex flex-column justify-content-center align-items-center">
            <CountdownCircleTimer
              key={label}
              isPlaying={isActive}
              duration={tiempo}
              colors={[
                ["#a06ecf", 0.33],
                ["#f9d19f", 0.33],
                ["#69e8b4", 0.33],
              ]}
              size={250}
              onComplete={() => terminaReloj()}
            >
              {({ remainingTime }) => renderReloj(remainingTime)}
            </CountdownCircleTimer>
          </div>
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
};

export default Reloj;
