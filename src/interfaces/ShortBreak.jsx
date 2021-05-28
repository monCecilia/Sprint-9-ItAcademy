import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo_mate.png'
function Portada() {
    return (
        
        <Container
        fluid
        className="background h-100 d-flex flex-column justify-content-center align-items-center align-content-center"
      >
                <Row className="altura-max d-flex flex-column justify-content-center align-items-center">
                    <Col className ="d-flex flex-column justify-content-center align-items-center">
                        <img src={logo} className="logo-break"/>
                        <h1 className="texto-break display-2">05:00</h1>
                        {/* ACA VA CRONOMETRO CON 5 MINUTOS */}
                    </Col>
                </Row>    
            </Container>  
    
                 
              
    );
}

export default Portada;

