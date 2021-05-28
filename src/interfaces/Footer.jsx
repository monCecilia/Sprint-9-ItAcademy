import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import correo from "../assets/icons/correo.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";

function Footer() {
  return (
    <footer>
      <Container className="p-5" style={{ marginTop: "10vh" }}>
        <Row className="d-flex justify-content-center">
          <Col className="d-flex justify-content-center">
            <Row className="mr-5">
              <a href="">
                <img src={correo} className="icono-redes" />
              </a>
            </Row>
            <Row className="mr-5">
              <a href="">
                <img src={twitter} className="icono-redes" />
              </a>
            </Row>
            <Row>
              <a href="">
                <img src={instagram} className="icono-redes" />
              </a>
            </Row>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="texto-footer">
            <h6>© 2021 Copyright: mateFocus</h6>
            <a className="px-2 texto-footer" href="">
              Aviso Legal
            </a>
            <a className="px-2 texto-footer" href="">
              Privacidad y Cookies
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
