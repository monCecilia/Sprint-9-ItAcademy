import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo_mate.png'
function Portada() {
    return (
       
            <Container fluid className="background h-100">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={12} md={6} lg={6}>
                        <img src={logo} style={{maxWidth:"90vw"}}/>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <h1 className="font-weight-bold">mateFocus</h1>
                    </Col>
                    
                </Row>
                
                
               

            </Container>
            
   
                 
              
    );
}

export default Portada;

