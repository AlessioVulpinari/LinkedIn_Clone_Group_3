import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function LinkedinFooter() {
  return (
    <Container>
      <Row>
        <Col>
          <a href="#a">Informazioni</a>
          <a href="#b">Linee guida della community</a>
          <Dropdown>
                <Dropdown.Toggle variant="outline" id="dropdown-basic">
                <a href="#c">Privacy e condizioni</a>
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#">Informativa sulla privacy</Dropdown.Item>
                  <Dropdown.Item href="#">Contratto di licenza</Dropdown.Item>
                  <Dropdown.Item href="#">Termini e condizioni delle pagine</Dropdown.Item>
                  <Dropdown.Item href="#">Informativa sui cookie</Dropdown.Item>
                  <Dropdown.Item href="#">Informativa sul copyright</Dropdown.Item>
                </Dropdown.Menu>
          </Dropdown>
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
            <div>
                <i class="bi bi-question-circle-fill"></i>
                <h4><a href="#n">Domande?</a></h4>
                <p>Visita il nostro centro assistenza.</p>
            </div>
            <div>
                <i class="bi bi-gear-fill"></i>
                <h4><a href="#o">Gestisci il tuo account e la tua privacy</a></h4>
                <p>Vai alle impostazioni</p>
            </div>
            <div>
                <i class="bi bi-shield-shaded"></i>
                <h4><a href="#p">Trasparenza sui contenuti consigliati</a></h4>
                <p>Scopri di più sui contenuti consigliati.</p>
            </div> 
          </div>
        </Col>
        <Col>
          <p>Selezione lingua</p>
          <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                 Italiano 
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#">English</Dropdown.Item>
                  <Dropdown.Item href="#">Spanish</Dropdown.Item>
                  <Dropdown.Item href="#">German</Dropdown.Item>
                  <Dropdown.Item href="#">French</Dropdown.Item>
                  <Dropdown.Item href="#">Japanese</Dropdown.Item>
                  <Dropdown.Item href="#">Dutch</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
