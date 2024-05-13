import { Nav, Container, Navbar, Dropdown, Form, Row, Col } from "react-bootstrap";

const NavBar = () => {
  const premiumRandom = () => {
    const text = [
      "Raggiungi i tuoi obiettivi con Premium",
      "Prova 1 mese di Premium per 0 EUR",
      "Da non perdere: Premium per 0 EUR",
      "Ottieni Premium per 0 EUR",
      "Sblocca Premium gratis per 1 mese",
      "Aggiorna le tue competenze con Premium",
      "Prova Premium per 0 EUR",
      "Una rete più smart con Premium",
      "Prova Premium gratis",
      "Fai decollare la tua carriera con Premium",
      "Sblocca 1 mese di Premium",
    ];
    const i = Math.floor(Math.random() * text.length);
    return text[i];
  };

  const toggleDropdown = () => {
    const dropdownBtn = document.getElementById("dropdown-ellipsis");
    dropdownBtn.click();
  };

  return (
    <header className="nav-container">
      <Navbar collapseOnSelect bg="dark" variant="dark" className="p-0" id="navbar" fixed="top">
        <Container fluid="xl" className="justify-content-start">
          <Nav.Link href="/" className="navbar-brand p-0 pointer d-flex justify-content-center align-items-center">
            <i className="bi bi-linkedin navbrand-icon"></i>
          </Nav.Link>

          <Form className="me-lg-auto">
            <Row>
              <Col xs="auto" className="d-none d-lg-block position-relative">
                <i className="bi bi-search nav-search-icon"></i>
                <Form.Control type="search" placeholder="Cerca" className="nav-search me-auto" id="nav-searchbar" />
              </Col>
            </Row>
          </Form>

          <Nav>
            <Nav.Link href="/" className="d-flex flex-column justify-content-center align-items-center py-1">
              <i className="bi bi-house-fill nav-icon"></i>
              <span className="d-none d-md-inline">Home</span>
            </Nav.Link>
            <Nav.Link className="d-flex flex-column justify-content-center align-items-center py-1">
              <i className="bi bi-people-fill nav-icon"></i>
              <span className="d-none d-md-inline">Rete</span>
            </Nav.Link>
            <Nav.Link className="d-flex flex-column justify-content-center align-items-center py-1">
              <i className="bi bi-briefcase-fill nav-icon"></i>
              <span className="d-none d-md-inline">Lavoro</span>
            </Nav.Link>
            <Nav.Link className="d-none-400 d-flex flex-column justify-content-center align-items-center py-1">
              <i className="bi bi-chat-dots-fill nav-icon"></i>
              <span className="d-none d-md-inline">Messaggistica</span>
            </Nav.Link>
            <Nav.Link className="d-none-475 d-flex flex-column justify-content-center align-items-center py-1">
              <i className="bi bi-bell-fill nav-icon"></i>
              <span className="d-none d-md-inline">Notifiche</span>
            </Nav.Link>
            <div
              className="d-none justify-content-center align-items-center d-sm-flex"
              style={{ borderRight: "1px solid rgba(255, 255, 255, 0.2)" }}
            >
              {/* <NavProfileCard /> */}
            </div>
            <Nav.Link className="d-none d-sm-flex flex-column justify-content-center align-items-center py-1 ms-0 ms-md-3 pointer">
              <i className="bi bi-grid-3x3-gap-fill d-flex nav-icon"></i>
              <div className="dropdown-toggle d-none d-md-block">Per le aziende</div>
            </Nav.Link>
            <Nav.Link className="d-none d-md-flex flex-column justify-content-center align-items-center premium-link ms-0 ms-md-2">
              {premiumRandom()}
            </Nav.Link>
          </Nav>

          <Nav.Link
            className="d-flex d-md-none flex-column justify-content-center align-items-center py-1"
            onClick={toggleDropdown}
          >
            <i className="bi bi-three-dots nav-icon" style={{ WebkitTextFillColor: "rgb(255,255,255,0.55)" }}></i>
          </Nav.Link>
          <Dropdown align="end" data-bs-theme="dark">
            <Dropdown.Toggle id="dropdown-ellipsis" className="d-none">
              Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu className="mt-4">
              <div className="d-flex justify-content-center align-items-center px-1">
                <Nav.Link className="d-flex d-sm-none flex-column justify-content-center align-items-center ms-0 ms-md-1 pointer">
                  <i className="bi bi-grid-3x3-gap-fill d-flex nav-icon"></i>
                  <div className="dropdown-toggle d-none d-md-block">Per le aziende</div>
                </Nav.Link>
                <Nav.Link className="d-flex d-md-none premium-link m-0 p-0">{premiumRandom()}</Nav.Link>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
