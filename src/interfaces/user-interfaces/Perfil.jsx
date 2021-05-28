import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button } from "../../theme/Styled";
import user from "../../assets/icons/user.svg";
function Perfil() {
  return (
    <Container fluid className="background h-100 d-flex flex-column justify-content-center align-items-center align-content-center">
      <Row className="mt-2">
        <Col style={{ marginTop: "10vh" }}>
          <img src={user} className="user" style={{ maxWidth: "70px" }}/>
          <h4 className="subtitulo">Perfil</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form className="form-acceder">
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
  );
}

export default Perfil;
