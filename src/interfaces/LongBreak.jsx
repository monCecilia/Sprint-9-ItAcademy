import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo_mate.png'
function Portada() {
    return (
        <React.Fragment>
            <Container fluid className="altura-max d-flex flex-column justify-content-center align-items-center align-content-center ">
                <Row className="altura-max d-flex flex-column justify-content-center align-items-center">
                    <Col className ="d-flex flex-column justify-content-center align-items-center">
                        <img src={logo} className="logo"/>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <h1 className="title">20:00</h1>
                        {/* ACA VA CRONOMETRO CON 20 MINUTOS */}
                    </Col>
                    
                </Row>
                
                
               

            </Container>
            
        </React.Fragment>
                 
              
    );
}

export default Portada;

