import React from "react";
import {Container} from "react-bootstrap";
import NavPerfil from "../components/NavPerfil";
import Reloj from "../components/Reloj";
import Tareas from "../components/Tareas";
import Bienvenidxs from "../interfaces/Bienvenidxs";
import Intro from "../interfaces/Intro";
import Footer from "../interfaces/Footer";

function MateFocusWeb() {
  return (
    <Container fluid>
      <NavPerfil />
      <Reloj />
      <Tareas />
      <Bienvenidxs />
      <Intro />
      <Footer />
    </Container>
  );
}

export default MateFocusWeb;