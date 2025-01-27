import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Outlet } from 'react-router';

const  LayoutInicio =()=>{
    return (
        <div className="App">
          <header>
        <ul>
            <li><a href="/Formulario" >Formulario</a></li>
            <li><a href="/Perfil" >Perfil</a></li>
        </ul>
          </header>
    
          <section className="hero">
            <Container>
              <Row>
                <Col>
            <Outlet />
           </Col>
              </Row>
    
            </Container>
          </section>
        </div>
      );
};
export default LayoutInicio;