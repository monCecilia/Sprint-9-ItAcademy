import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import logIn from "../assets/icons/logIn.svg";

function NavPerfil(){
  return (
    <React.Fragment>
      <Navbar className="nav">
        <Navbar.Brand className="nav" href="#home">mateFocus</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <img src={logIn} className="logIn"/>
          </Navbar.Text>
          <Navbar.Text className="nav">
          <a className="nav" href="#perfil">Maria López</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      
      
    </React.Fragment>
  );
}

export default NavPerfil;
