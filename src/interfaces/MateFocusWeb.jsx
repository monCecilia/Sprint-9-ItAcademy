import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavPerfil from "../components/NavPerfil";

import Tareas from "../components/Tareas";
import Bienvenidxs from "../interfaces/Bienvenidxs";
import Intro from "../interfaces/Intro";
import Footer from "../interfaces/Footer";

function MateFocusWeb({ tareas, setTareas }) {
  return (
    <Container fluid>
      <NavPerfil />

      <Tareas tareas={tareas} setTareas={setTareas} />
      <Bienvenidxs />
      <Intro />
      <Footer />
    </Container>
  );
}

export default MateFocusWeb;
