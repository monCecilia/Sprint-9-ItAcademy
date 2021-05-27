import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button } from "../theme/Styled";
function Acceder() {
  return (
    <React.Fragment>
      <Container
        fluid
        className="background altura-max d-flex flex-column justify-content-center align-items-center align-content-center"
      >
        <Row>
          <Col>
          <h4 className="subtitulo">Acceder</h4>
            <Form className="form-acceder">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo electrónico
                </Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Col>
              <Button type="submit">
               Entrar
              </Button>
              {/* ACA VA LINK A REGISTRO */}
              <Form.Text className="form-texto">
                  No tenés cuenta? Registrate
                </Form.Text> 
            </Col>
            
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Acceder;
