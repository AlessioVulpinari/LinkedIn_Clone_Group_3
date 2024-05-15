import { Col, Container, Row, Image } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
const HomeFooter = () => {
  return (
    <>
      <Container className="mt-3 homeFooter-container">
        <Row className="justify-content-center">
          <Col className="col-11 font-footer d-flex flex-wrap justify-content-center align-items-center text-secondary">
            <p className="pe-3 pointer">Informazioni</p>
            <p className="pe-3 pointer">Accessibilità</p>
            <p className="pe-3 pointer">Centro Assistenza</p>
            <NavDropdown
              id="dropdown-dark-example"
              title="Privacy e Condizioni"
              data-bs-theme="dark"
              className="mb-3 pe-3"
            >
              <NavDropdown.Item style={{ fontSize: "0.9rem" }}>Informazioni sulla privacy</NavDropdown.Item>
              <NavDropdown.Item style={{ fontSize: "0.9rem" }}>Contratto di licenza</NavDropdown.Item>
              <NavDropdown.Item style={{ fontSize: "0.9rem" }}>Termini e condizioni delle pagine</NavDropdown.Item>
              <NavDropdown.Item style={{ fontSize: "0.9rem" }}>Informazioni sui cookie</NavDropdown.Item>
              <NavDropdown.Item style={{ fontSize: "0.9rem" }}>Informativa sul copryright</NavDropdown.Item>
            </NavDropdown>
            <p className="pe-3 pointer">Opzioni per gli annunci pubblicitari</p>
            <p className="pe-3 pointer">Pubblicità </p>
            <NavDropdown
              id="dropdown-dark-example"
              title="Servizi alle aziende"
              data-bs-theme="dark"
              className="mb-3 pe-3 dropdown-aziende"
            >
              <NavDropdown.Item href="#100">
                <h6 className="mb-0">Assumi su LinkedIn</h6>
                <p className="text-secondary mb-1">Trova, attrai e assumi</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#200">
                <h6 className="mb-0">Vendi con LinkedIn</h6>
                <p className="text-secondary mb-1">Sblocca nuove opportunità di vendita</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#300">
                <h6 className="mb-0">Offerta di lavoro gratuita</h6>
                <p className="text-secondary mb-1">Ottieni rapidamente candidati qualificati</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#400">
                <h6 className="mb-0">Fai pubblicità su LinkedIn</h6>
                <p className="text-secondary mb-1">Acquisisci clienti e fai crescere la tua azienda</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#400">
                <h6 className="mb-0">Impara con LinkedIn</h6>
                <p className="text-secondary mb-1">Corsi per formare i tuoi dipendenti</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#400">
                <h6 className="mb-0">Centro Amministrazione</h6>
                <p className="text-secondary mb-1">Gestisci dettagli di fatturazione e account</p>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#500">
                <h6 className="mb-0">Crea una pagina aziendale +</h6>
              </NavDropdown.Item>
            </NavDropdown>
            <p className="pe-3 pointer">Scarica l&apos;app di LinkedIn</p>
            <p className="pe-3 pointer">Altro</p>
          </Col>
          <Col className="col-12 font-footer d-flex justify-content-center text-secondary">
            <Image
              src="https://static.licdn.com/aero-v1/sc/h/34bl5fp6gi8t0nscavw94xa7x"
              x="0"
              y="0"
              width="56"
              height="14"
              className="pe-2"
            ></Image>
            <p className="pe-2">Linkedin Corporation &copy; {new Date().getFullYear()} </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeFooter;
