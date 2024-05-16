import { Container, ListGroup, Button } from "react-bootstrap";

function JobsPageMain() {
  return (
    <div id="jobsMain" className="bg-dark text-light rounded">
      <Container className="p-3 pb-0">
        <h4>Le principali offerte di lavoro per te</h4>
        <p className="text-secondary">Sulla base del tuo profilo e della tua cronologia delle ricerche</p>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="bg-dark text-light border-secondary py-3">
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-3">
                <div>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                    alt="profile picture"
                  />
                </div>
                <div>
                  <a href="#">
                    <h5>Offerta di lavoro</h5>
                  </a>
                  <p>Nome Azienda</p>
                  <p className="text-secondary">Luogo</p>
                  <div className="d-flex gap-2 align-items-center mt-2">
                    <img
                      className="rounded-circle miniPicture"
                      src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                      alt="profile picture"
                    />
                    <h6 className="text-secondary">Il tuo profilo è in linea con questa offerta di lavoro</h6>
                  </div>
                </div>
              </div>
              <div>
                <Button className="xBtn">
                  <i className="bi bi-x-lg"></i>
                </Button>
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-light border-secondary py-3">
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-3">
                <div>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                    alt="profile picture"
                  />
                </div>
                <div>
                  <a href="#">
                    <h5>Offerta di lavoro</h5>
                  </a>
                  <p>Nome Azienda</p>
                  <p className="text-secondary">Luogo</p>
                  <div className="d-flex gap-2 align-items-center mt-2">
                    <img
                      className="rounded-circle miniPicture"
                      src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                      alt="profile picture"
                    />
                    <h6 className="text-secondary">Il tuo profilo è in linea con questa offerta di lavoro</h6>
                  </div>
                </div>
              </div>
              <div>
                <Button className="xBtn">
                  <i className="bi bi-x-lg"></i>
                </Button>
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-light border-secondary py-3">
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-3">
                <div>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                    alt="profile picture"
                  />
                </div>
                <div>
                  <a href="#">
                    <h5>Offerta di lavoro</h5>
                  </a>
                  <p>Nome Azienda</p>
                  <p className="text-secondary">Luogo</p>
                  <div className="d-flex gap-2 align-items-center mt-2">
                    <img
                      className="rounded-circle miniPicture"
                      src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                      alt="profile picture"
                    />
                    <h6 className="text-secondary">Il tuo profilo è in linea con questa offerta di lavoro</h6>
                  </div>
                </div>
              </div>
              <div>
                <Button className="xBtn">
                  <i className="bi bi-x-lg"></i>
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Container>
      <Button className="showBtn">
        Mostra tutto <i className="bi bi-arrow-right"></i>
      </Button>
    </div>
  );
}

export default JobsPageMain;
