import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button } from "../theme/Styled";
import user from "../assets/icons/user.svg";
function Perfil() {
  return (
    <React.Fragment>
      <Container
        fluid
        className="background altura-max d-flex flex-column justify-content-center align-items-center align-content-center"
      >
          <Row className="mt-2">
          <Col>
            <img src={user} className="user" />
            <h4 className="subtitulo">Perfil</h4>
          </Col>
          </Row>
        <Row>
          <Col>
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
                <Button type="submit">Actualizar</Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Perfil;
