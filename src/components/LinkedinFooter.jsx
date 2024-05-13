import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function LinkedinFooter() {
  return (
    <Container>
      <Row>
        <Col>
          <a href="#a">Informazioni</a>
          <a href="#b">Linee guida della community</a>
          <a href="#c">Privacy e condizioni</a>
          <a href="#d">Sales Solutions</a>
          <a href="#e">Centro sicurezza</a>
        </Col>
        <Col>
          <a href="#f">Accessibilità</a>
          <a href="#g">Carriera</a>
          <a href="#h">Opzioni per gli annunci pubblicitari</a>
          <a href="#i">Mobile</a>
        </Col>
        <Col>
          <a href="#j">Talent Solutions</a>
          <a href="#k">Soluzioni di marketing</a>
          <a href="#l">Pubblicità</a>
          <a href="#m">Piccole imprese</a>
        </Col>
        <Col>
          <div>
            <div><h4><a href="#n">Domande?</a></h4>
            <p>Visita il nostro centro assistenza.</p></div>
            <div> <h4><a href="#o">Gestisci il tuo account e la tua privacy</a></h4>
            <p>Vai alle impostazioni</p></div>
            <div><h4><a href="#p">Trasparenza sui contenuti consigliati</a></h4>
            <p>Scopri di più sui contenuti consigliati.</p></div> 
          </div>
        </Col>
        <Col>
          <p>Selezione lingua</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>LinkedIn Corporation © 2024</p>
        </Col>
      </Row>
    </Container>
  );
}

export default LinkedinFooter;
