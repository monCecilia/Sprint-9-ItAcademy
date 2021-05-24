import React from "react";
import play from "../assets/icons/play.svg";
import { Container, Row, Col } from "react-bootstrap";

function Reloj() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center">
            {/* RELOJ */}
            <div>
              <h1 className="reloj display-3">25:00</h1>
            </div>

            {/* ICONO PLAY */}
            <div>
              <img src={play} className="play" />
            </div>
            
              {/* TRABAJANDO EN */}
              <div className="trabajando-en">
                <p className="texto-light">TRABAJANDO EN</p>
                <a className="texto-light" href="#currentTask">
                  Elaborar informe
                </a>
              </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Reloj;
