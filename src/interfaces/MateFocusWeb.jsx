import React from "react";
import {Container} from "react-bootstrap";
import NavPerfil from "../components/NavPerfil";
import Reloj from "../components/Reloj";
import Tareas from "../components/Tareas";
import Bienvenidxs from "./Bienvenidxs";
import Intro from "./Intro";
import Footer from "./Footer";

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