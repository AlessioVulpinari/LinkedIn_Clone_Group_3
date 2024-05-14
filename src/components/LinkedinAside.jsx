import { Button, ListGroup, Container } from "react-bootstrap";

function LinkedinAside() {
  return (
    <Container id="aside" className="py-5">
      <div className="bg-dark text-light rounded my-3">
        <Container className="p-3 pb-0">
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="bg-dark text-light border-secondary py-3">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>Lingua del profilo</h5>
                  <p>Italiano</p>
                </div>
                <div>
                  <Button className="editBtn">
                    <i className="bi bi-pencil"></i>
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-light border-secondary py-3">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>Profilo pubblico e URL</h5>
                  <p>www.linkedin.com/in/nome-cognome-ID</p>
                </div>
                <div>
                  <Button className="editBtn">
                    <i className="bi bi-pencil"></i>
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </div>
      <div className="bg-dark text-light rounded my-3">
        <Container className="p-3 pb-0">
          <h5>Persone che potresti conoscere</h5>
          <p>Dalla tua scuola o università</p>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="bg-dark text-light border-secondary py-3">
              <div className="d-flex gap-2">
                <div>
                  <img
                    className="rounded-circle"
                    src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                    alt="profile picture"
                  />
                </div>
                <div>
                  <a href="#">Nome Cognome</a>
                  <p>TUTTECOSE</p>
                  <Button className="addBtn">
                    <i className="bi bi-person-plus-fill"></i> Collegati
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-light border-secondary py-3">
              <div className="d-flex gap-2">
                <div>
                  <img
                    className="rounded-circle"
                    src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                    alt="profile picture"
                  />
                </div>
                <div>
                  <a href="#">Nome Cognome</a>
                  <p>TUTTECOSE</p>
                  <Button className="addBtn">
                    <i className="bi bi-person-plus-fill"></i> Collegati
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-light border-secondary py-3">
              <div className="d-flex gap-2">
                <div>
                  <img
                    className="rounded-circle"
                    src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                    alt="profile picture"
                  />
                </div>
                <div>
                  <a href="#">Nome Cognome</a>
                  <p>TUTTECOSE</p>
                  <Button className="addBtn">
                    <i className="bi bi-person-plus-fill"></i> Collegati
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-light border-secondary py-3">
              <div className="d-flex gap-2">
                <div>
                  <img
                    className="rounded-circle"
                    src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                    alt="profile picture"
                  />
                </div>
                <div>
                  <a href="#">Nome Cognome</a>
                  <p>TUTTECOSE</p>
                  <Button className="addBtn">
                    <i className="bi bi-person-plus-fill"></i> Collegati
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-light border-secondary py-3">
              <div className="d-flex gap-2">
                <div>
                  <img
                    className="rounded-circle"
                    src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                    alt="profile picture"
                  />
                </div>
                <div>
                  <a href="#">Nome Cognome</a>
                  <p>TUTTECOSE</p>
                  <Button className="addBtn">
                    <i className="bi bi-person-plus-fill"></i> Collegati
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Container>
        <Button className="showBtn">Mostra tutto</Button>
      </div>
      <div className="bg-dark text-light rounded my-3">
        <Container className="p-3 pb-0">
          <h5>Potrebbe interessarti</h5>
          <p>Pagine per te</p>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="bg-dark text-light border-secondary py-3">
              <div className="d-flex gap-2">
                <div>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                    alt="profile picture"
                  />
                </div>
                <div>
                  <a href="#">Nome Azienda</a>
                  <p>numero follower</p>
                  <Button className="addBtn">
                    <i className="bi bi-plus-lg"></i> Segui
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-light border-secondary py-3">
              <div className="d-flex gap-2">
                <div>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg"
                    alt="profile picture"
                  />
                </div>
                <div>
                  <a href="#">Nome Azienda</a>
                  <p>numero follower</p>
                  <Button className="addBtn">
                    <i className="bi bi-plus-lg"></i> Segui
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Container>
        <Button className="showBtn">Mostra tutto</Button>
      </div>
    </Container>
  );
}

export default LinkedinAside;
