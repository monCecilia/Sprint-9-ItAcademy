import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavPerfil from "../components/NavPerfil";
import Reloj from "../components/Reloj";
import Tareas from "../components/Tareas";

function Home(props) {
  return (
    <Container fluid>
      <NavPerfil />
      <Reloj />
      <Tareas props={props} />
    </Container>
  );
}

export default Home;
