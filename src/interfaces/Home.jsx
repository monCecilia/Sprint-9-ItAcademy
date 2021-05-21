import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavPerfil from '../components/NavPerfil';
import Reloj from '../components/Reloj';
import Tareas from "../components/Tareas"

function Home() {
  return (
    <React.Fragment>
      <Container>
            <Row>
                <Col>
                    <NavPerfil />
                    <Reloj />
                    <Tareas />
                </Col>
            </Row>
            

      </Container>
    </React.Fragment>
  );
}

export default Home;
