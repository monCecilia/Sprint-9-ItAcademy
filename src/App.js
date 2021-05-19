import React, {Fragment} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portada from './interfaces/Portada';
import Bienvenidxs from './interfaces/Bienvenidxs';
import Intro from "./interfaces/Intro";
import Acceder from './interfaces/Acceder';
import Registro from './interfaces/Registro';
import Perfil from './interfaces/Perfil';


function App() {
  return <div>
  <Fragment>
    <Router>
      <Switch>
        {/* PORTADA */}
        <Route path="/" exact>
          <Portada />
        </Route>
        {/* INTRODUCCION */}
        <Route path="/bienvenidxs" >
          <Bienvenidxs />
        </Route>
        <Route path="/intro" >
          <Intro />
        </Route>
        {/* ACCEDER */}
        <Route path="/acceder">
          <Acceder />
        </Route>
        {/* REGISTRO*/}
        <Route path="/registro">
          <Registro/>
        </Route>
        {/* PERFIL*/}
        <Route path="/perfil">
          <Perfil/>
        </Route>
         {/* HOME*/}
         <Route path="/home">
          <Perfil/>
        </Route>
      </Switch>
    </Router>
  </Fragment>


</div>;
}

export default App;
