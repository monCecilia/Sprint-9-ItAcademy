import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo_mate.png'
function Portada() {
    return (
        <React.Fragment>
            <Container fluid className="background">
                <Row className="altura-max d-flex flex-column justify-content-center align-items-center">
                    <Col>
                        <img src={logo} className="logo"/>
                    </Col>
                    <Col>
                        <h1 className="titulo">mateFocus</h1>
                    </Col>
                    
                </Row>
                
                
               

            </Container>
            
        </React.Fragment>
                 
              
    );
}

export default Portada;

