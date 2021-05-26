import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import logIn from "../assets/icons/logIn.svg";
import { Container } from "react-bootstrap";

function NavPerfil(){
  return (
    <Container>
      <Navbar className="nav">
        <Navbar.Brand className="nav" href="#home">mateFocus</Navbar.Brand>

        {/* LOGIN DESACTIVADO */}
        {/* <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <img src={logIn} className="logIn"/>
          </Navbar.Text>
          <Navbar.Text className="nav">
          <a className="nav" href="#perfil">Maria López</a>
          </Navbar.Text>
        </Navbar.Collapse> */}
        
      </Navbar>
      
      
    </Container>
  );
}

export default NavPerfil;
