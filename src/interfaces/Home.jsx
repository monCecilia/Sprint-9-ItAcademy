import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavPerfil from "../components/NavPerfil";
import Reloj from "../components/Reloj";
import Tareas from "../components/Tareas";

function Home() {
  return (
    <Container className="background-simple altura-max">
      <NavPerfil />
      <Reloj />
      <Tareas />
    </Container>
  );
}

export default Home;
