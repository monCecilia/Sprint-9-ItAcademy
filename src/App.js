import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portada from "./interfaces/Portada";
import Bienvenidxs from "./interfaces/Bienvenidxs";
import Intro from "./interfaces/Intro";
import Acceder from "./interfaces/user-interfaces/Acceder";
import Registro from "./interfaces/user-interfaces/Registro";
import Perfil from "./interfaces/user-interfaces/Perfil";
import Home from "./interfaces/Home";
import ShortBreak from "./interfaces/ShortBreak";
import LongBreak from "./interfaces/LongBreak";
import MateFocusWeb from "./interfaces/MateFocusWeb";

import { mockTareas } from "./data/mockTareas";

function App() {
  const [tareas, setTareas] = useState(
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
            {/* HOME VERSION WEB */}
            <Route path="/" exact>
              <MateFocusWeb tareas={tareas} setTareas={setTareas} />
            </Route>
            {/*SHORTBREAK*/}
            <Route path="/shortbreak">
              <ShortBreak />
            </Route>
            {/* LONGBREAK*/}
            <Route path="/longbreak">
              <LongBreak />
            </Route>

            {/* ESTOS COMPONENTES SON DE LA VERSIÓN MOVIL (SUMADOS A LOS BREAKS Y LA PORTADA, QUE SE RE UTILIZAN) */}

            {/* PORTADA */}
            <Route path="/portada">
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
              <Home />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;
