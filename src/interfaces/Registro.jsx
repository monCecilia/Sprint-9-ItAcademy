import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button } from "../theme/Styled";
function Registro() {
  return (
    <React.Fragment>
      <Container
        fluid
        className="altura-max d-flex flex-column justify-content-center align-items-center align-content-center"
      >
        <Row>
          <Col>
            <h4 className="subtitulo">Registro</h4>
            <Form className="form-acceder ">
              <Form.Group controlId="formGroupUser">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirmar</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>
              <Col>
                <Button type="submit">Crear cuenta</Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Registro;
