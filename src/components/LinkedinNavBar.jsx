import { useState } from "react";
import { Nav, Container, Navbar, Dropdown, Form, Row, Col } from "react-bootstrap";
import NavProfileCard from "./NavProfileLinkedin";
import { useDispatch } from "react-redux";
import { getAllJobsAction } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const LinkedInNavBar = () => {
  const [navDropdownOpen, setNavDropdownOpen] = useState(false);
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  const navigate = useNavigate();

  const searchJobs = async () => {
    try {
      const res = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${inputValue}`);
      if (res.ok) {
        const jobs = await res.json();
        dispatch(getAllJobsAction(jobs.data));
      } else {
        throw new Error(`Errore nella fetch dei jobs`);
      }
    } catch (err) {
      console.log(err);
    }
  };

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

  const toggleNavDropdown = () => {
    setNavDropdownOpen(!navDropdownOpen);
  };

  const toggleSearchDropdown = () => {
    setSearchDropdownOpen(!searchDropdownOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchJobs();
    setInputValue("");
    navigate("/JobsPage");
  };

  return (
    <header className="nav-container">
      <Navbar collapseOnSelect bg="dark" variant="dark" className="p-0" id="navbar" fixed="top">
        <Container fluid="xl" className="justify-content-start">
          <Nav.Link href="/" className="navbar-brand p-0 pointer d-flex justify-content-center align-items-center">
            <i className="bi bi-linkedin navbrand-icon"></i>
          </Nav.Link>

          <Form className="me-lg-auto" onSubmit={handleSubmit}>
            <Row>
              <Col xs="auto" className="d-none d-lg-block position-relative">
                <i className="bi bi-search nav-search-icon"></i>
                <Form.Control
                  type="search"
                  placeholder="Cerca"
                  className="nav-search me-auto"
                  id="nav-searchbar"
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                />
              </Col>
            </Row>
            <Nav>
              <Nav.Link
                className="d-lg-none d-flex flex-column justify-content-center align-items-center py-1"
                onClick={toggleSearchDropdown}
              >
                <i className="bi bi-search nav-icon" style={{ WebkitTextFillColor: "rgb(255,255,255,0.55)" }}></i>
                <span className="d-none d-md-inline" style={{ WebkitTextFillColor: "rgb(255,255,255,0.55)" }}>
                  Cerca
                </span>
              </Nav.Link>
            </Nav>
            <Dropdown data-bs-theme="dark" show={searchDropdownOpen}>
              <Dropdown.Menu className="nav-search-dropdown">
                <div className="px-2 pb-2 mb-1 border-bottom position-relative d-lg-none">
                  <i className="bi bi-search nav-search-icon-mobile"></i>
                  <Form.Control
                    type="search"
                    placeholder="Cerca"
                    className="nav-search me-auto"
                    id="nav-searchbar-mobile"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                  />
                </div>
              </Dropdown.Menu>
            </Dropdown>
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
              <NavProfileCard />
            </div>
            <Nav.Link className="d-none d-sm-flex flex-column justify-content-center align-items-center py-1  ms-0 ms-md-3 pointer">
              <i className="bi bi-grid-3x3-gap-fill nav-icon"></i>
              <div className="dropdown-toggle d-none d-md-block">Per le aziende</div>
            </Nav.Link>
            <Nav.Link className="d-none d-md-flex flex-column justify-content-center align-items-center premium-link ms-0 ms-md-2">
              {premiumRandom()}
            </Nav.Link>
          </Nav>

          <Nav.Link
            className="d-flex d-md-none flex-column justify-content-center align-items-center py-1"
            onClick={toggleNavDropdown}
          >
            <i className="bi bi-three-dots nav-icon" style={{ WebkitTextFillColor: "rgb(255,255,255,0.55)" }}></i>
          </Nav.Link>
          <Dropdown align="end" data-bs-theme="dark" show={navDropdownOpen}>
            <Dropdown.Menu className="mt-4">
              <Nav.Link className="d-flex-400 flex-column justify-content-center align-items-center py-1">
                <i className="bi bi-chat-dots-fill nav-icon"></i>
                <span className="d-none d-md-inline">Messaggistica</span>
              </Nav.Link>
              <Nav.Link className="d-flex-475 flex-column justify-content-center align-items-center py-1">
                <i className="bi bi-bell-fill nav-icon"></i>
                <span className="d-none d-md-inline">Notifiche</span>
              </Nav.Link>
              <div className="d-flex justify-content-center align-items-center px-1">
                <div className="d-flex d-sm-none justify-content-center align-items-center d-sm-flex">
                  <NavProfileCard />
                </div>
                <Nav.Link className="d-flex d-xs-none flex-column justify-content-center align-items-center ms-0 ms-md-1 pointer">
                  <i className="bi bi-grid-3x3-gap-fill d-flex nav-icon"></i>
                  <div className="dropdown-toggle d-none d-md-block">Per le aziende</div>
                </Nav.Link>
                <Nav.Link className="d-flex d-xs-none premium-link m-0 p-0">{premiumRandom()}</Nav.Link>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </header>
  );
};

export default LinkedInNavBar;
