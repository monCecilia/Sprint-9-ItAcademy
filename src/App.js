import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portada from "./interfaces/Portada";
import Bienvenidxs from "./interfaces/Bienvenidxs";
import Intro from "./interfaces/Intro";
import Acceder from "./interfaces/Acceder";
import Registro from "./interfaces/Registro";
import Perfil from "./interfaces/Perfil";
import Home from "./interfaces/Home";

const mockTareas = [
  { titulo: "uno", comentario: "com1", mates: 1, matesHechos: 0 },
  { titulo: "dos", comentario: "com2", mates: 2, matesHechos: 1 },
  { titulo: "tres", comentario: "com3", mates: 3, matesHechos: 2 },
];

/* localStorage.setItem("tareas", JSON.stringify(mockTareas)); */

function App() {
  const [tareas, setTarea] = useState(
    localStorage.getItem("tareas") || JSON.stringify(mockTareas)
  );

  useEffect(() => {
    localStorage.setItem("tareas", tareas);
  }, [tareas]);

  return (
    <div>
      <Fragment>
        <Router>
          <Switch>
            {/* PORTADA */}
            <Route path="/" exact>
              <Portada />
            </Route>
            {/* INTRODUCCION */}
            <Route path="/bienvenidxs">
              <Bienvenidxs />
            </Route>
            <Route path="/intro">
              <Intro />
            </Route>
            {/* ACCEDER */}
            <Route path="/acceder">
              <Acceder />
            </Route>
            {/* REGISTRO*/}
            <Route path="/registro">
              <Registro />
            </Route>
            {/* PERFIL*/}
            <Route path="/perfil">
              <Perfil />
            </Route>
            {/* HOME*/}
            <Route path="/home">
              <Home tareas={tareas} setTarea={setTarea} />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;
