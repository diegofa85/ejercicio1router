import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Layout.css';
import { Outlet } from 'react-router';

const  Layout =()=>{
    return (
        <div className="App">
          <header>
        <ul>
            <li><a href="/" >Inicio</a></li>
            <li><a href="/About" >Acerca de mí</a></li>
            <li><a href="/CasosExito" >Casos de éxito</a></li>
            <li><a href="/About" >Contacto</a></li>
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
export default Layout;
